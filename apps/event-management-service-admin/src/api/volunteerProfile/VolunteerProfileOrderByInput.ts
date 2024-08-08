import { SortOrder } from "../../util/SortOrder";

export type VolunteerProfileOrderByInput = {
  createdAt?: SortOrder;
  eventsVolunteered?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
