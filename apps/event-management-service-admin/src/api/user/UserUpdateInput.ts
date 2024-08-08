import { ParticipantProfileUpdateManyWithoutUsersInput } from "./ParticipantProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VolunteerProfileUpdateManyWithoutUsersInput } from "./VolunteerProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  participantProfiles?: ParticipantProfileUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  volunteerProfiles?: VolunteerProfileUpdateManyWithoutUsersInput;
};
