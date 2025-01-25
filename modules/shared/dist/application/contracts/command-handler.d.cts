import Command from './command.cjs';
import Result from './result.cjs';

interface CommandHandler<TCommand extends Command, TResult extends Result> {
    handle(command: TCommand): Promise<TResult>;
}

export type { CommandHandler as default };
