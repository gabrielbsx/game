interface Controller<TRequest, TResponse> {
    handle(request: TRequest): Promise<TResponse>;
}

export type { Controller as default };
