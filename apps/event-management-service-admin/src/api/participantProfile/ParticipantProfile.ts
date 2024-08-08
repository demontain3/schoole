import { User } from "../user/User";

export type ParticipantProfile = {
  certifications: string | null;
  createdAt: Date;
  eventsParticipated: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
