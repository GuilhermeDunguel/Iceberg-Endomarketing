import { useState } from "react"

import './EventItem.scss'

import Dots from '../../../../assets/dots-icon.svg'
import { EventItemInterface } from "../../../../context/EventManagementContext"
import PresenceModal from "./PresenceModal/PresenceModal";

interface EventProps {
  event: EventItemInterface;
  onClickDelete: () => void;
}

export function EventItem(props: EventProps) {

  const {onClickDelete} = props;

  const [isDeleteButtonActive, setIsDeleteButtonActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <section className='event-item-section'>
      <div className='event-container' key={props.event.id}>
      <div className='event-container-left-side'>
         <div className='event-image-div'>
            <img src={props.event.file.url} alt="" />
            <div className="event-details-mobile-div">
              <span id={props.event.type} className='event-category'>{props.event.type.toUpperCase()}</span>
              <span>{props.event.info.date}</span>
              <span>{props.event.info.place}</span>
            </div>
         </div>
         <div className="event-info-div">
            <span className="event-title">
            {props.event.title}
            </span>
            <div className='event-details-div'>
              <span id={props.event.type} className='event-category event-info'>{props.event.type.toUpperCase()}</span>
              <span className='event-date event-info'>{props.event.info.date}</span>
              <span className='event-location event-info'>{props.event.info.place}</span>
              {props.event.invited_people !== undefined ? 
                <a 
                  className='event-invited-people' 
                  onClick={() => isModalActive ?
                  setIsModalActive(false)
                  : setIsModalActive(true)}
                >
                  {(props.event.invited_people).length} CONFIRMAÇÕES DE 15
                </a>
              : null}
              {
                isModalActive ? 
                <PresenceModal
                  presence_list={props.event.invited_people || [] as any}
                  modal_handler={{isModalActive, setIsModalActive}}
                />
                : null
              }
            </div>
            <p className='event-description'>{props.event.description}</p>
         </div>
      </div>
      <div className='event-dotted-button-div'>
        <button
          className='dotted-button'
            onClick={() => isDeleteButtonActive ? setIsDeleteButtonActive(false)
            : setIsDeleteButtonActive(true)}
        >
          <img src={Dots} alt="" />
        </button>
        {isDeleteButtonActive === true ? 
          <div className='event-deleting-menu'>
            <button
              onClick={onClickDelete}
            >
                Deletar item
            </button>
          </div>
        : null
        }

      </div>
      </div>
    </section>
  )
}
