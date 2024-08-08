import { SponsorCreateNestedManyWithoutEventsInput } from "./SponsorCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  parentEvent?: string | null;
  sponsors?: SponsorCreateNestedManyWithoutEventsInput;
  startDate?: Date | null;
};
