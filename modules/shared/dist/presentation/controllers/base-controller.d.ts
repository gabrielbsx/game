import Controller from '../contracts/controller.js';

declare abstract class BaseController<TRequest, TResponse> implements Controller<TRequest, TResponse> {
    abstract handle(request: TRequest): Promise<TResponse>;
}

export { BaseController as default };
