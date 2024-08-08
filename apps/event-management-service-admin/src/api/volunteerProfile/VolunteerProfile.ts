import { User } from "../user/User";

export type VolunteerProfile = {
  createdAt: Date;
  eventsVolunteered: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
