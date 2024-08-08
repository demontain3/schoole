import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantProfileCreateInput = {
  certifications?: string | null;
  eventsParticipated?: string | null;
  user?: UserWhereUniqueInput | null;
};
