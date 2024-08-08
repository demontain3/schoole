import { ParticipantProfile } from "../participantProfile/ParticipantProfile";
import { JsonValue } from "type-fest";
import { VolunteerProfile } from "../volunteerProfile/VolunteerProfile";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  participantProfiles?: Array<ParticipantProfile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  volunteerProfiles?: Array<VolunteerProfile>;
};
