import { EventType } from "./events.type";

const URL = "https://its-events.davide-mantovani.workers.dev/events ";

export const getEvents = async (): Promise<EventType[]> => {
  const res: Response = await fetch(URL);
  if (res.status === 200) {
    const data = (await res.json()) as EventType[];
    return data;
  }
  return [];
};
