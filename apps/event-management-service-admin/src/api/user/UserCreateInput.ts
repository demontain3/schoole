import { ParticipantProfileCreateNestedManyWithoutUsersInput } from "./ParticipantProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VolunteerProfileCreateNestedManyWithoutUsersInput } from "./VolunteerProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  participantProfiles?: ParticipantProfileCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
  volunteerProfiles?: VolunteerProfileCreateNestedManyWithoutUsersInput;
};
