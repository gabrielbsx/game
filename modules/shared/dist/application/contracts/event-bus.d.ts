import Event from './event.js';

interface EventBus<TEventBase extends Event = Event> {
    publish<TEvent extends TEventBase, TContext = unknown>(event: TEvent, context?: TContext): unknown;
    publishAll<TEvent extends TEventBase, TContext = unknown>(events: TEvent[], context?: TContext): unknown;
}

export type { EventBus as default };
