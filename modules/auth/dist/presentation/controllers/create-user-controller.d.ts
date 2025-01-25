import BaseController from '@game/shared/presentation/controllers/base-controller';

declare class CreateUserCotnroller extends BaseController<string, string> {
    constructor();
    handle(request: string): Promise<string>;
}

export { CreateUserCotnroller as default };
