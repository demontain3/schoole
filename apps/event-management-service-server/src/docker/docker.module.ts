import { Module } from "@nestjs/common";
import { DockerService } from "./docker.service";
import { DockerController } from "./docker.controller";
import { DockerResolver } from "./docker.resolver";

@Module({
  controllers: [DockerController],
  providers: [DockerService, DockerResolver],
  exports: [DockerService],
})
export class DockerModule {}
