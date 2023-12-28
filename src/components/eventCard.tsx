import "./eventCard.scss";
import { EventType } from "../repo/events.type";
import { Link } from "react-router-dom";
import { getDetails } from "../repo";
import { CiCalendar } from "react-icons/ci";

type EventCardType = {
  event: EventType;
  detailPath: string;
};

const EventCard = ({ event, detailPath }: EventCardType) => {
  // destrutturazione
  const { name, coverImage, date, description, tags } = event;

  const tagsElements = tags.map((tag) => {
    return (
      <p
        key={tag}
        className="px-1 py-0.5 m-2 bg-[#7EB2E1] text-white rounded-lg"
      >
        {tag}
      </p>
    );
  });

  return (
    <div className="event-card flex flex-col md:flex-row justify-between items-center">
      <img src={coverImage} className="w-100 md:w-[40%] mb-3 md:pb-0" />
      <div className="flex flex-col px-2 md:w-2/5 md:mr-24">
        <h2 className="uppercase font-semibold font-mono">{name}</h2>

        <table className="flex justify-center">
          <tr className="flex flex-row justify-around ">
            <th className="mx-3">
              <CiCalendar className="h-5 w-5" />
            </th>
            <td className="mx-3">{date}</td>
          </tr>
        </table>
        <p>{description.short}</p>
        <div className="mx-2 flex flex-row justify-center">{tagsElements}</div>
        <Link
          to={detailPath}
          onClick={() => {
            getDetails(event.id);
          }}
        >
          <button className="mt-3 mb-5">See details</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
