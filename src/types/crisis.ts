/**
 * Empty pipes for a multi-turn hardship session.
 * Persist redacted text only. Do not log raw identity fields.
 */

export type CrisisSessionId = string;

export type TurnRole = "user" | "agent";

export type AnaphoraBind = {
  pronoun: "it" | "this" | "they" | "that" | "them";
  slot: string | null;
  turnIndex: number;
};

export type DialogueTurn = {
  index: number;
  role: TurnRole;
  text: string;
  binds: AnaphoraBind[];
};

export type EvictionFiling = {
  status: "unknown" | "rumored" | "served" | "hearing" | "judgment";
  hearingOn: string | null;
};

export type BenefitTrack = "unset" | "bokjiro" | "other";

export type CrisisSession = {
  id: CrisisSessionId;
  turns: DialogueTurn[];
  binds: AnaphoraBind[];
  eviction: EvictionFiling | null;
  benefitTrack: BenefitTrack;
  closed: boolean;
};

export function emptyCrisisSession(id: CrisisSessionId): CrisisSession {
  return {
    id,
    turns: [],
    binds: [],
    eviction: null,
    benefitTrack: "unset",
    closed: false,
  };
}
