import Event from './event.js';

interface EventHandler<TEvent extends Event = Event> {
    handle: (event: TEvent) => unknown;
}

export type { EventHandler as default };
