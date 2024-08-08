import { Event } from "../event/Event";

export type Sponsor = {
  contactInfo: string | null;
  createdAt: Date;
  event?: Event | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
