import Event from './event.cjs';

interface EventHandler<TEvent extends Event = Event> {
    handle: (event: TEvent) => unknown;
}

export type { EventHandler as default };
