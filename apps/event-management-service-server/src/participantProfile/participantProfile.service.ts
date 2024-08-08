import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParticipantProfileServiceBase } from "./base/participantProfile.service.base";

@Injectable()
export class ParticipantProfileService extends ParticipantProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
