import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParticipantProfileService } from "./participantProfile.service";
import { ParticipantProfileControllerBase } from "./base/participantProfile.controller.base";

@swagger.ApiTags("participantProfiles")
@common.Controller("participantProfiles")
export class ParticipantProfileController extends ParticipantProfileControllerBase {
  constructor(protected readonly service: ParticipantProfileService) {
    super(service);
  }
}
