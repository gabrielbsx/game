import Request from "./request";

export default interface RequestHandler<
  TRequest extends Request<TResponse>,
  TResponse
> {
  handle<TRequest extends Request<TResponse>>(
    request: TRequest
  ): Promise<TResponse>;
}
