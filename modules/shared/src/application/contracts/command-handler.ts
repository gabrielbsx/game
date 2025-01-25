import Command from "./command";
import Result from "./result";

export default interface CommandHandler<
  TCommand extends Command,
  TResult extends Result
> {
  handle(command: TCommand): Promise<TResult>;
}
