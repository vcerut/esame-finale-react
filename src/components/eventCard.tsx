import "./eventCard.scss";
import { EventType } from "../repo/events.type";
import { Link } from "react-router-dom";
import { getDetails } from "../repo";

type EventCardType = {
  event: EventType;
  detailPath: string;
};

const EventCard = ({ event, detailPath }: EventCardType) => {
  // destrutturazione
  const { name, coverImage, date, dresscode } = event;

  return (
    <div className="event-card flex flex-col justify-center items-center">
      <img src={coverImage} />
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{dresscode}</p>
      <div></div>
      <Link
        to={detailPath}
        onClick={() => {
          getDetails(event.id);
        }}
      >
        <button>See details</button>
      </Link>
    </div>
  );
};

export default EventCard;
