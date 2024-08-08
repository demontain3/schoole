import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParticipantProfileWhereInput = {
  certifications?: StringNullableFilter;
  eventsParticipated?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
