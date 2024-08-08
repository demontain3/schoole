import * as graphql from "@nestjs/graphql";
import { DockerService } from "./docker.service";

export class DockerResolver {
  constructor(protected readonly service: DockerService) {}

  @graphql.Mutation(() => String)
  async CreateDevelopmentDockerCompose(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreateDevelopmentDockerCompose(args);
  }

  @graphql.Mutation(() => String)
  async CreateDevelopmentDockerfile(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreateDevelopmentDockerfile(args);
  }

  @graphql.Mutation(() => String)
  async CreateProductionDockerCompose(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreateProductionDockerCompose(args);
  }

  @graphql.Mutation(() => String)
  async CreateProductionDockerfile(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreateProductionDockerfile(args);
  }
}
