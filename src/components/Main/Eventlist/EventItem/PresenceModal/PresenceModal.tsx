import { X } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import './PresenceModal.scss'

import userPlaceholder from '../../../../../assets/user-placeholder.jpg'

interface PresenceModalProps {
  presence_list: [{
    id: number;
    name: string;
    confirmed_presence: boolean;
    avatar: string;
    username: string
  }]

  modal_handler: {
    isModalActive: boolean;
    setIsModalActive: Dispatch<SetStateAction<boolean>>
  }
};


export default function PresenceModal(props: PresenceModalProps) {
  
  return (
    <>
      <div className='presence-modal'>
        <header className='modal-header'>
          <span className='modal-title'>Lista de presença</span>
          <button className='close-modal-button'
            onClick={() => props.modal_handler.isModalActive ?
              props.modal_handler.setIsModalActive(false) :
              props.modal_handler.setIsModalActive(true)}
          >
            <X size={25} weight="fill" />
          </button>
        </header>
        {props.presence_list.map(user => 
        <div key={user.avatar} className='user-div'>
          <div className='user-image-div'>
            <img className='user-image' src={user.avatar} onError={
              (e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = userPlaceholder;
              }
            } alt="" />
          </div>
          <div className='user-info-div'>
            <span className='user-name'>
              {user.name} &minus;
              <span className='user-username'> @{user.username}</span>
            </span>
            <div className='user-presence-div'>
              {user.confirmed_presence === true ?
              <span className='presence-confirmed'>Presença confirmada</span>
              : <span className='presence-not-confirmed'>Presença não confirmada</span>}
            </div>
          </div>
        </div>
        )}
      </div>
      <div className='modal-background'></div>
    </>
  )
}
