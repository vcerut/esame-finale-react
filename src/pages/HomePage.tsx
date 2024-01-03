import EventCard from "../components/eventCard";
import Navbar from "../components/navbar";
import { UseEvents } from "../hooks/useEvents";
import logo from "../img/ouroboros-logo.png";

const HomePage = () => {
  const { events, isLoading } = UseEvents();

  if (isLoading) {
    // se isLoading è true, allora ritorna questo e bom, non fa anche il return dopo (fino a quando il valore di isLoading non diventa false)
    return <p>Loading data</p>;
  }

  return (
    <>
      <Navbar />
      <header>
        <div className='w-full bg-cover bg-center'>
          <div className='flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-20 header-image'>
            <img src={logo} alt='' className='logo' />
          </div>
        </div>
      </header>
      <h1 className='my-5 uppercase font-semibold font-mono'>
        Upcoming Events
      </h1>
      <div className='flex flex-col flex-wrap justify-center'>
        {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              event={event}
              detailPath={`/detail/${index}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
