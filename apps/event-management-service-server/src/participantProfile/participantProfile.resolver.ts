import * as graphql from "@nestjs/graphql";
import { ParticipantProfileResolverBase } from "./base/participantProfile.resolver.base";
import { ParticipantProfile } from "./base/ParticipantProfile";
import { ParticipantProfileService } from "./participantProfile.service";

@graphql.Resolver(() => ParticipantProfile)
export class ParticipantProfileResolver extends ParticipantProfileResolverBase {
  constructor(protected readonly service: ParticipantProfileService) {
    super(service);
  }
}
