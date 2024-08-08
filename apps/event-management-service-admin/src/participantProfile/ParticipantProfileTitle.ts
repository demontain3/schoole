import { ParticipantProfile as TParticipantProfile } from "../api/participantProfile/ParticipantProfile";

export const PARTICIPANTPROFILE_TITLE_FIELD = "id";

export const ParticipantProfileTitle = (
  record: TParticipantProfile
): string => {
  return record.id?.toString() || String(record.id);
};
