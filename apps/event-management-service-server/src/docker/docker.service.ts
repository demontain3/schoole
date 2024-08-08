import { Injectable } from "@nestjs/common";

@Injectable()
export class DockerService {
  constructor() {}
  async CreateDevelopmentDockerCompose(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateDevelopmentDockerfile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateProductionDockerCompose(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateProductionDockerfile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
