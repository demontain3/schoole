import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SponsorWhereInput = {
  contactInfo?: StringNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
