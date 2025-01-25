import CreateUserRequest from "./create-user-request";
import CreateUserResponse from "./create-user-response";
import CommandHandler from "@game/shared/application/contracts/command-handler";

export default class CreateUserCommandHandler
  implements CommandHandler<CreateUserRequest, CreateUserResponse>
{
  async handle(command: CreateUserRequest): Promise<CreateUserResponse> {
    console.log(command);
    return new CreateUserResponse();
  }
}
