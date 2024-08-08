import { Module } from "@nestjs/common";
import { ParticipantProfileModuleBase } from "./base/participantProfile.module.base";
import { ParticipantProfileService } from "./participantProfile.service";
import { ParticipantProfileController } from "./participantProfile.controller";
import { ParticipantProfileResolver } from "./participantProfile.resolver";

@Module({
  imports: [ParticipantProfileModuleBase],
  controllers: [ParticipantProfileController],
  providers: [ParticipantProfileService, ParticipantProfileResolver],
  exports: [ParticipantProfileService],
})
export class ParticipantProfileModule {}
