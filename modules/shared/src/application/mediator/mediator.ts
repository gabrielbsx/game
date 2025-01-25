import { Mediator } from "../contracts/mediator/mediator";
import Request from "../contracts/mediator/request";
import RequestHandler from "../contracts/mediator/request-handler";

export class MediatorImpl implements Mediator {
  static handlers: Map<string, RequestHandler<Request<unknown>, unknown>> =
    new Map();

  async send<TRequest extends Request<TResponse>, TResponse>(
    request: TRequest
  ): Promise<TResponse> {
    const handler = MediatorImpl.handlers.get(request.constructor.name);

    if (!handler) {
      throw new Error("No handler registered");
    }

    return (await handler.handle(request)) as TResponse;
  }

  listen<TRequest extends Request<TResponse>, TResponse>(
    handler: RequestHandler<TRequest, TResponse>
  ): void {
    MediatorImpl.handlers.set(handler.constructor.name, handler);
  }
}
