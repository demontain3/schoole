import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type SponsorCreateInput = {
  contactInfo?: string | null;
  event?: EventWhereUniqueInput | null;
  name?: string | null;
};
