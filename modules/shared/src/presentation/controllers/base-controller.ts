import Controller from "../contracts/controller";

export default abstract class BaseController<TRequest, TResponse>
  implements Controller<TRequest, TResponse>
{
  abstract handle(request: TRequest): Promise<TResponse>;
}
