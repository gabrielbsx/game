import BaseController from '@game/shared/presentation/controllers/base-controller';

declare class AuthController extends BaseController<string, string> {
    handle(request: string): Promise<string>;
}

export { AuthController as default };
