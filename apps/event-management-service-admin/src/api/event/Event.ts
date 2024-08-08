import { Sponsor } from "../sponsor/Sponsor";

export type Event = {
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  parentEvent: string | null;
  sponsors?: Array<Sponsor>;
  startDate: Date | null;
  updatedAt: Date;
};
