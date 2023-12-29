import { useEffect, useState } from "react";
import { EventDetailType } from "../repo/event.detail.type";
import { useParams } from "react-router-dom";
import { getDetails } from "../repo";

export const useEventDetail = () => {
  const [eventDetail, setEventDetail] = useState<EventDetailType | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setSlot = () => {
    const startTime = new Date(
      typeof eventDetail?.date === "string" ? eventDetail?.date : ""
    );
    let timeIndex = 0;
    const reservationSlot = [];

    while (timeIndex < 6) {
      const separatedTime = new Date(
        startTime.getTime() + timeIndex * 15 * 60 * 1000
      );
      reservationSlot.push(
        separatedTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      timeIndex++;
    }
    return reservationSlot;
  };

  const { id } = useParams<string>();
  let idNum = 0;
  if (id) {
    idNum = parseInt(id) + 1;
  } else {
    console.error("Id value is wrong");
  }

  useEffect(() => {
    getDetails(idNum).then((eventDetail) => {
      setEventDetail(eventDetail);
      console.log(eventDetail);
      setIsLoading(false);
    });
  }, [idNum]);
  return { eventDetail, isLoading, setSlot };
};
