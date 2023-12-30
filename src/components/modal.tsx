import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import writeReservation from "../utils/firebase";
import { useState } from "react";

type ReservationType = {
  timeSlot: string;
  eventId: string;
};

export function FormModale(reservation: ReservationType) {
  const { timeSlot, eventId } = reservation;
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button className='bg-gray-900' onClick={handleOpen} variant='gradient'>
        {timeSlot}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className='text-white'>
          You have selected the {timeSlot} timeslot
        </DialogHeader>
        <DialogBody className='text-white'>
          Please enter your email below to confirm your reservation.
          <form action='post' id='reservation'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              className='form-constrol'
              id='email'
              name='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1 bg-gray-900 border border-red-500 text-red-500'
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant='gradient'
            color='green'
            onClick={() => {
              handleOpen();
              writeReservation(email, eventId, timeSlot);
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}