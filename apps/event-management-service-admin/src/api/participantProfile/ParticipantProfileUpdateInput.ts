import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantProfileUpdateInput = {
  certifications?: string | null;
  eventsParticipated?: string | null;
  user?: UserWhereUniqueInput | null;
};
