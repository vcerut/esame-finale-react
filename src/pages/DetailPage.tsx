import { useEffect, useState } from "react";
import { useEventDetail } from "../hooks/useEventDetail";
// import { useParams } from "react-router-dom";
import { EventDetailType } from "../repo/event.detail.type";

import { CiCalendar } from "react-icons/ci";
import { PiTShirtThin } from "react-icons/pi";
import { CiMoneyBill } from "react-icons/ci";
import { BiDrink } from "react-icons/bi";
import { FormModale } from "../components/modal";
import Navbar from "../components/navbar";

const DetailPage = () => {
  // const { id } = useParams();
  const { eventDetail, isLoading, setSlot } = useEventDetail();

  const [event, setEvent] = useState<EventDetailType>();

  const descriptionElements = event?.description.long.map((descriptionLong) => {
    return (
      <p key={descriptionLong} className='px-1 py-0.5 m-2 text-white'>
        {descriptionLong}
      </p>
    );
  });

  const drinksIncluded = event?.includedDrinks.map((drinks, index) => {
    return (
      <span key={drinks}>
        {drinks}
        {index < event?.includedDrinks.length - 1 ? ", " : ""}
      </span>
    );
  });

  const slots = setSlot();

  useEffect(() => {
    if (!isLoading && eventDetail) {
      const eventDetailCopy: EventDetailType = {
        ...eventDetail,
        description: {
          ...eventDetail.description,
          short: eventDetail.description.short || "no short description",
          long: eventDetail.description.long || "no long description",
        },
      };
      setEvent(eventDetailCopy);
    }
  }, [isLoading, eventDetail, event?.description.long]);

  return (
    <>
      <Navbar />
      <div className='flex justify-center'>
        <img src={eventDetail?.coverImage} className='w-1/2 ' />
      </div>
      <div className='mx-auto pb-5'>
        <h1 className='text-2xl text-[#F7D002] uppercase font-semibold font-mono my-3'>
          {eventDetail?.name}
        </h1>
        <p className='text-xl'>{descriptionElements}</p>
        <div className='mx-3 flex flex-col md:flex-row justify-center md:justify-around'>
          <div className='flex flex-row gap-x-3'>
            <span className='text-[#F00699] font-bold'>
              <CiCalendar className='h-5 w-5' />
            </span>
            <p>{eventDetail?.date.replace("T", " ")}</p>
          </div>
          <div className='flex flex-row gap-x-3'>
            <span className='text-[#F00699] font-bold'>
              <PiTShirtThin className='h-5 w-5' />
            </span>
            <p>{eventDetail?.dresscode}</p>
          </div>
          <div className='flex flex-row gap-x-3'>
            <span className='text-[#F00699] font-bold'>
              <CiMoneyBill className='h-5 w-5' />
            </span>
            <p>{eventDetail?.price}€</p>
          </div>
          <div className='flex flex-row gap-x-3'>
            <span className='text-[#F00699] font-bold'>
              <BiDrink className='h-5 w-5' />
            </span>
            <p>{drinksIncluded}</p>
          </div>
          <div className='flex flex-row md:justify-center'>
            <p>
              {eventDetail?.isAperitivoIncluded
                ? "Aperitivo is included"
                : "Aperitivo not included"}
            </p>
          </div>
        </div>
      </div>
      <div className='my-24'>
        <h3 className='text-2xl text-[#018E42] uppercase font-semibold font-mono my-3'>
          Make a reservation
        </h3>
        <div className='flex justify-center gap-5 flex-col md:flex-row'>
          {event?.id &&
            slots.map((slot, index) => (
              <div key={index}>
                {/* <button> */}
                <FormModale timeSlot={slot} eventId={event?.id.toString()} />
                {/* </button> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
