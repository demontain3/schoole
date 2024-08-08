import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parentEvent?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
