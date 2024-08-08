import * as graphql from "@nestjs/graphql";
import { VolunteerProfileResolverBase } from "./base/volunteerProfile.resolver.base";
import { VolunteerProfile } from "./base/VolunteerProfile";
import { VolunteerProfileService } from "./volunteerProfile.service";

@graphql.Resolver(() => VolunteerProfile)
export class VolunteerProfileResolver extends VolunteerProfileResolverBase {
  constructor(protected readonly service: VolunteerProfileService) {
    super(service);
  }
}
