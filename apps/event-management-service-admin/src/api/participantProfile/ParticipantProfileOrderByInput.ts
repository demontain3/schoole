import { SortOrder } from "../../util/SortOrder";

export type ParticipantProfileOrderByInput = {
  certifications?: SortOrder;
  createdAt?: SortOrder;
  eventsParticipated?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
