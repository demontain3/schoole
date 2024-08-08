import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VolunteerProfileUpdateInput = {
  eventsVolunteered?: string | null;
  user?: UserWhereUniqueInput | null;
};
