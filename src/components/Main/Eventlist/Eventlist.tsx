import './Eventlist.scss'

import {EventlistButtons} from './Eventlist-buttons/EventlistButtons'
import { EventItem } from './EventItem/EventItem'
import { EventManagementContext } from '../../../context/EventManagementContext'
import { useContext } from 'react'
import { FilterEventsContext } from '../../../context/FilterEventsContext'

export function Eventlist() {

  const ContextConsumer = useContext(EventManagementContext);
  const listOfEvents = ContextConsumer.listOfEvents;
  const setListOfEvents = ContextConsumer.setListOfEvents;

  const FilterContextData = useContext(FilterEventsContext);
  const filter = FilterContextData.filter;

  function handleDeletingEvent(id: number) {
    const updatedArrayWithEvents = listOfEvents.filter(event => {
      return event.id !== id
    });
    setListOfEvents(updatedArrayWithEvents);
  }

  return (
    <section className='eventlist-section'>
      <header className='eventlist-header'>
        <div className='eventlist-title-div'>
          <h1>Endomarketing</h1>
        </div>
        <div className='eventlist-buttons-div'>
          <EventlistButtons />
        </div>
      </header>
      <>
        {listOfEvents.filter(event => filter.includes(event.type) || !filter.length).map(event => <EventItem key={event.id} event={event} onClickDelete={() => handleDeletingEvent(event.id)}/>)}
      </>
    </section>
  )
}