export default interface Controller<TRequest, TResponse> {
  handle(request: TRequest): Promise<TResponse>;
}
