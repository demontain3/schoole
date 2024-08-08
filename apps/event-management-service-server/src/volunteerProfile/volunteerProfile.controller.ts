import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VolunteerProfileService } from "./volunteerProfile.service";
import { VolunteerProfileControllerBase } from "./base/volunteerProfile.controller.base";

@swagger.ApiTags("volunteerProfiles")
@common.Controller("volunteerProfiles")
export class VolunteerProfileController extends VolunteerProfileControllerBase {
  constructor(protected readonly service: VolunteerProfileService) {
    super(service);
  }
}
