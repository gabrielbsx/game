import Request from "./request";
import RequestHandler from "./request-handler";

export interface Mediator {
  send<TRequest extends Request<TResponse>, TResponse>(
    request: TRequest
  ): Promise<TResponse>;

  listen<TRequest extends Request<TResponse>, TResponse>(
    handler: RequestHandler<TRequest, TResponse>
  ): void;
}
