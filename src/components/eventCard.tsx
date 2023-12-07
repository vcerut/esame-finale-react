import "./eventCard.scss";
import { EventType } from "../repo/events.type";
// import { Link } from "react-router-dom";

type EventCardType = {
  event: EventType;
  //   detailPath: string;
};

const EventCard = ({ event }: EventCardType) => {
  // destrutturazione
  const { name, coverImage, date, dresscode } = event;

  return (
    <div className="user-card flex flex-col justify-center items-center">
      <img src={coverImage} />
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{dresscode}</p>

      <div></div>
    </div>
  );
};

export default EventCard;
