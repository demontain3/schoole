import { Module } from "@nestjs/common";
import { VolunteerProfileModuleBase } from "./base/volunteerProfile.module.base";
import { VolunteerProfileService } from "./volunteerProfile.service";
import { VolunteerProfileController } from "./volunteerProfile.controller";
import { VolunteerProfileResolver } from "./volunteerProfile.resolver";

@Module({
  imports: [VolunteerProfileModuleBase],
  controllers: [VolunteerProfileController],
  providers: [VolunteerProfileService, VolunteerProfileResolver],
  exports: [VolunteerProfileService],
})
export class VolunteerProfileModule {}
