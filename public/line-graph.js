(function(){
  var data = window.LINE_GRAPH;
  var svg = document.getElementById("line-graph");
  var detail = document.getElementById("line-detail");
  if(!data || !svg || !detail) return;
  var NS = "http://www.w3.org/2000/svg";
  var ENTITIES = data.entities || [];
  var EVENTS = data.events || [];
  function el(n,a){var e=document.createElementNS(NS,n); for(var k in a) e.setAttribute(k,a[k]); return e;}
  function draw(){
    while(svg.firstChild) svg.removeChild(svg.firstChild);
    var list = EVENTS;
    var W = 1100, rowH = 58, top = 36;
    if(!list.length){
      svg.setAttribute("viewBox","0 0 "+W+" 80");
      return;
    }
    var H = Math.max(top + list.length*rowH + 36, 220);
    svg.setAttribute("viewBox","0 0 "+W+" "+H);
    var evX = 560, entX = 860;
    var entY = {};
    var span = H - top - 40;
    ENTITIES.forEach(function(n,i){
      entY[n] = top + 16 + (ENTITIES.length===1 ? 0 : i*span/(ENTITIES.length-1));
    });
    var edges = [], evGroups = [], placed = [];
    list.forEach(function(ev,i){
      var y = top + i*rowH + 18;
      (ev.links||[]).forEach(function(n){
        if(entY[n]===undefined) return;
        var p = el("path",{d:"M"+evX+","+y+" C"+(evX+140)+","+y+" "+(entX-140)+","+entY[n]+" "+entX+","+entY[n],"class":"edge"});
        p._ev = i; svg.appendChild(p); edges.push(p);
      });
      var g = el("g",{"class":"ev",tabindex:"0",role:ev.href?"link":"button","aria-label":(ev.who||"")+" "+ev.title});
      g.appendChild(el("circle",{cx:evX,cy:y,r:6}));
      var t1 = el("text",{x:evX-16,y:y+5,"class":"t"}); t1.textContent = ev.title; g.appendChild(t1);
      if(ev.when){ var t2 = el("text",{x:evX-16,y:y+20,"class":"g"}); t2.textContent = ev.when; g.appendChild(t2); }
      g._i = i; evGroups.push(g);
      if(ev.href){ var a = el("a",{href:ev.href}); a.appendChild(g); svg.appendChild(a); }
      else svg.appendChild(g);
      placed.push({ev:ev,i:i,y:y});
    });
    placed.forEach(function(p){
      var hops = [];
      if(p.ev.continues) hops.push(p.ev.continues);
      if(p.ev.also) p.ev.also.forEach(function(h){ hops.push(h); });
      hops.forEach(function(href){
        var from = null;
        for(var k=0;k<placed.length;k++){ if(placed[k].ev.href===href) from = placed[k]; }
        if(!from) return;
        var path = el("path",{d:"M"+(evX+18)+","+from.y+" L"+(evX+18)+","+p.y,"class":"edge"});
        path._ev = p.i; path._from = from.i;
        svg.insertBefore(path, svg.firstChild);
        edges.push(path);
      });
    });
    var entGroups = {};
    ENTITIES.forEach(function(n){
      var g = el("g",{"class":"ent"});
      g.appendChild(el("circle",{cx:entX,cy:entY[n],r:6}));
      var t = el("text",{x:entX+14,y:entY[n]+5}); t.textContent = n; g.appendChild(t);
      entGroups[n] = g; svg.appendChild(g);
    });
    function titleFor(href){
      for(var n=0;n<EVENTS.length;n++){ if(EVENTS[n].href===href) return EVENTS[n].title; }
      return href;
    }
    function select(i){
      var ev = list[i];
      edges.forEach(function(p){ p.classList.toggle("on", p._ev===i || p._from===i); });
      evGroups.forEach(function(g){ g.classList.toggle("sel", g._i===i); g.classList.toggle("dim", g._i!==i); });
      ENTITIES.forEach(function(n){ entGroups[n].classList.toggle("on", (ev.links||[]).indexOf(n)>-1); });
      detail.innerHTML = "";
      var a = document.createElement("div"); a.className = "dg";
      a.textContent = (ev.who||"") + (ev.when ? " · "+ev.when : "") + " · " + (ev.links||[]).join(", ");
      var b = document.createElement("div"); b.className = "dt"; b.textContent = ev.title;
      var c = document.createElement("div"); c.className = "ds"; c.textContent = ev.text || "";
      detail.appendChild(a); detail.appendChild(b); detail.appendChild(c);
      if(ev.href || ev.continues || ev.also){
        var open = document.createElement("div"); open.className = "ds";
        if(ev.href){
          var link = document.createElement("a"); link.href = ev.href; link.textContent = "Open this record";
          open.appendChild(link);
        }
        if(ev.continues){
          open.appendChild(document.createTextNode(" · continues "));
          var cont = document.createElement("a"); cont.href = ev.continues; cont.textContent = titleFor(ev.continues);
          open.appendChild(cont);
        }
        if(ev.also){
          ev.also.forEach(function(href){
            open.appendChild(document.createTextNode(" · also "));
            var extra = document.createElement("a"); extra.href = href; extra.textContent = titleFor(href);
            open.appendChild(extra);
          });
        }
        detail.appendChild(open);
      }
    }
    function clear(){
      edges.forEach(function(p){ p.classList.remove("on"); });
      evGroups.forEach(function(g){ g.classList.remove("sel","dim"); });
      ENTITIES.forEach(function(n){ entGroups[n].classList.remove("on"); });
    }
    evGroups.forEach(function(g){
      g.addEventListener("mouseenter", function(){ select(g._i); });
      g.addEventListener("focus", function(){ select(g._i); });
      g.addEventListener("click", function(){ select(g._i); });
    });
    svg.addEventListener("mouseleave", clear);
    if(list.length) select(list.length-1);
  }
  draw();
})();
