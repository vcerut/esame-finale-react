import { useEffect, useState } from "react";
import { EventType } from "../repo/events.type";
import { getEvents } from "../repo";

export const UseEvents = () => {
  //spazio di memoria in cui dichiarare se l'API sta caricando o meno. inizialmente è true
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //spazio di memoria in cui caricare gli utenti ricevuti tramite API
  //inizialmente array vuoto
  const [events, setEvents] = useState<EventType[]>([]);

  //Il seguente useEffect carica la lista degli utenti all'avvio del componente (nessuna dipendenza specificata nell'array delle dipendenze)
  useEffect(() => {
    //chiamo la funzione di caricamento utenti
    loadEvents();
  }, []);

  const loadEvents = async () => {
    //chiamo l'API per caricare gli utenti
    getEvents().then((events) => {
      //salvo la risposta (users: UserType[])nello stato
      setEvents(events);
      //imposto isLoading a false perchè il caricamento è terminato
      setIsLoading(false);
    });
  };
  //ritorno un oggetto contenente le informazioni che servono alla vista
  return { events, isLoading };
};
