import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VolunteerProfileServiceBase } from "./base/volunteerProfile.service.base";

@Injectable()
export class VolunteerProfileService extends VolunteerProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
