import { EventDetailType } from "./event.detail.type";
import { EventType } from "./events.type";

const URLlist = "https://its-events.davide-mantovani.workers.dev/events ";

const URLdetails = "https://its-events.davide-mantovani.workers.dev/events/";

export const getEvents = async (): Promise<EventType[]> => {
  const res: Response = await fetch(URLlist);
  if (res.status === 200) {
    const data = (await res.json()) as EventType[];
    return data;
  }
  return [];
};

export const getDetails = async (
  eventId: number
): Promise<EventDetailType | undefined> => {
  const eventDetailsURL = `${URLdetails}${eventId}`;
  const res: Response = await fetch(eventDetailsURL);
  if (res.status === 200) {
    const data = (await res.json()) as EventDetailType;
    return data;
  }
  return undefined;
};
