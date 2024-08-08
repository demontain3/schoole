import { VolunteerProfileWhereInput } from "./VolunteerProfileWhereInput";
import { VolunteerProfileOrderByInput } from "./VolunteerProfileOrderByInput";

export type VolunteerProfileFindManyArgs = {
  where?: VolunteerProfileWhereInput;
  orderBy?: Array<VolunteerProfileOrderByInput>;
  skip?: number;
  take?: number;
};
