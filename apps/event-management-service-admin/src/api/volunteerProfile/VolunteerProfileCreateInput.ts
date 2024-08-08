import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VolunteerProfileCreateInput = {
  eventsVolunteered?: string | null;
  user?: UserWhereUniqueInput | null;
};
