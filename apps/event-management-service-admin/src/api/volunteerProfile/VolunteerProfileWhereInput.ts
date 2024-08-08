import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VolunteerProfileWhereInput = {
  eventsVolunteered?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
