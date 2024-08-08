import { VolunteerProfile as TVolunteerProfile } from "../api/volunteerProfile/VolunteerProfile";

export const VOLUNTEERPROFILE_TITLE_FIELD = "id";

export const VolunteerProfileTitle = (record: TVolunteerProfile): string => {
  return record.id?.toString() || String(record.id);
};
