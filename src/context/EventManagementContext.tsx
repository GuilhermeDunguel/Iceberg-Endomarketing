import axios from 'axios';
import { 
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState } from 'react'

export interface EventItemInterface {
  id: number;
  title: string;
  description: string;
  type: string;
  info: {
    date: string;
    place?: string;
  };
  file: {
    url: string;
  };
  invited_people?: {
    id: number;
    avatar: string;
    confirmed_presence: boolean;
    name: string;
    username: string; 
    length: any;
  };
  
}

interface APIDataProps {
  children: ReactNode,
}

interface ContextProps {
  listOfEvents: EventItemInterface[],
  setListOfEvents: Dispatch<SetStateAction<EventItemInterface[]>>
}
 
export const EventManagementContext = createContext<ContextProps>({} as ContextProps)

export default function EventManagement({children}: APIDataProps) {

  const [listOfEvents, setListOfEvents] = useState<EventItemInterface[]>([])

  useEffect(() => {
    axios.get('https://api.npoint.io/7ca06581d7b327c3026f')
    .then((response) => setListOfEvents(response.data.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <EventManagementContext.Provider value={{listOfEvents, setListOfEvents}}>
      {children}
    </EventManagementContext.Provider>
  )
}
