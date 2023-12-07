import EventCard from "../components/eventCard";
import { UseEvents } from "../hooks/useEvents";

const HomePage = () => {
  const { events, isLoading } = UseEvents();

  if (isLoading) {
    // se isLoading è true, allora ritorna questo e bom, non fa anche il return dopo (fino a quando il valore di isLoading non diventa false)
    return <p>Loading data</p>;
  }

  return (
    <>
      <h1>Events</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {events.map((event, index) => {
          return <EventCard key={index} event={event} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
