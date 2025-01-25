import BaseController from "@game/shared/presentation/controllers/base-controller";

export default class CreateUserCotnroller extends BaseController<
  string,
  string
> {
  constructor() {
    super();
  }

  async handle(request: string) {
    return request;
  }
}
