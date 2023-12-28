import { useEffect, useState } from "react";
import { UseEvents } from "../hooks/useEvents";
import { useParams } from "react-router-dom";
import { EventDetailType } from "../repo/event.detail.type";
import logo from "../img/ouroboros-logo.png";

import { CiCalendar } from "react-icons/ci";
import { PiTShirtThin } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";

const DetailPage = () => {
  const { id } = useParams();
  const { events, isLoading } = UseEvents();

  const [event, setEvent] = useState<EventDetailType | null>();

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
      <div className="flex justify-center">
        <img src={event?.coverImage} className="w-1/2" />
      </div>
      <div className="mx-auto pb-5">
        <h1 className="text-2xl uppercase font-semibold font-mono my-3">
          {event?.name}
        </h1>
        <p className="text-xl">{event?.description.short}</p>
        <table className="flex justify-center">
          <tr className="mx-5">
            <th className="mx-3">
              <CiCalendar className="h-5 w-5" />
            </th>
            <td className="mx-3">{event?.date.replace("T", " ")}</td>
          </tr>
          <tr className="mx-5">
            <th className="mx-3">
              <PiTShirtThin className="h-5 w-5" />
            </th>
            <td className="mx-3">{event?.dresscode}</td>
          </tr>
          <tr className="mx-5">
            <th className="mx-3"></th>
            <td className="mx-3"></td>
          </tr>
          <tr className="mx-5">
            <th className="mx-3">
              <CiMoneyBill className="h-5 w-5" />
            </th>
            <td className="mx-3">{event?.price}€</td>
          </tr>
        </table>
      </div>
      <div className="my-24">
        <p className="font-mono font-semibold uppercase">powered by</p>
        <div className="flex justify-center">
          <img src={logo} alt="" className="w-56" />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
