import { SponsorUpdateManyWithoutEventsInput } from "./SponsorUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  parentEvent?: string | null;
  sponsors?: SponsorUpdateManyWithoutEventsInput;
  startDate?: Date | null;
};
