import Command from './command.js';
import Result from './result.js';

interface CommandHandler<TCommand extends Command, TResult extends Result> {
    handle(command: TCommand): Promise<TResult>;
}

export type { CommandHandler as default };
