import { ParticipantProfileWhereInput } from "./ParticipantProfileWhereInput";
import { ParticipantProfileOrderByInput } from "./ParticipantProfileOrderByInput";

export type ParticipantProfileFindManyArgs = {
  where?: ParticipantProfileWhereInput;
  orderBy?: Array<ParticipantProfileOrderByInput>;
  skip?: number;
  take?: number;
};
