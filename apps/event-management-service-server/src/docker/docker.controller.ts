import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DockerService } from "./docker.service";

@swagger.ApiTags("dockers")
@common.Controller("dockers")
export class DockerController {
  constructor(protected readonly service: DockerService) {}

  @common.Post("/create-dev-docker-compose")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDevelopmentDockerCompose(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateDevelopmentDockerCompose(body);
      }

  @common.Post("/create-dev-dockerfile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDevelopmentDockerfile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateDevelopmentDockerfile(body);
      }

  @common.Post("/create-prod-docker-compose")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateProductionDockerCompose(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateProductionDockerCompose(body);
      }

  @common.Post("/create-prod-dockerfile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateProductionDockerfile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateProductionDockerfile(body);
      }
}
