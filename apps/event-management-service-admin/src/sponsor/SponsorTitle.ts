import { Sponsor as TSponsor } from "../api/sponsor/Sponsor";

export const SPONSOR_TITLE_FIELD = "name";

export const SponsorTitle = (record: TSponsor): string => {
  return record.name?.toString() || String(record.id);
};
