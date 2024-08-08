import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParticipantProfileListRelationFilter } from "../participantProfile/ParticipantProfileListRelationFilter";
import { VolunteerProfileListRelationFilter } from "../volunteerProfile/VolunteerProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  participantProfiles?: ParticipantProfileListRelationFilter;
  username?: StringFilter;
  volunteerProfiles?: VolunteerProfileListRelationFilter;
};
