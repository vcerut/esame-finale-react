import { useEffect, useState } from "react";
import { UseEvents } from "../hooks/useEvents";
import { useParams } from "react-router-dom";
import { EventDetailType } from "../repo/event.detail.type";

const DetailPage = () => {
  const { id } = useParams();
  const { events, isLoading } = UseEvents();
  const [event, setEvent] = useState<EventDetailType>();

  useEffect(() => {
    if (!isLoading && events && id) {
      const idNum = parseInt(id);

      if (Number.isInteger(idNum) && events[idNum]) {
        const eventDetail: EventDetailType = {
          ...events[idNum],
          description: {
            ...events[idNum].description,
            long: events[idNum].description.long || [],
          },
        };

        setEvent(eventDetail);
      } else {
        console.error("Invalid id or events data.");
      }
    }
  }, [id, isLoading, events]);

  return (
    <>
      <p> {event?.name}</p>
    </>
  );
};

export default DetailPage;
