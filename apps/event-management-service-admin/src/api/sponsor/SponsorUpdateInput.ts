import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SponsorUpdateInput = {
  contactInfo?: string | null;
  event?: EventWhereUniqueInput | null;
  name?: string | null;
};
