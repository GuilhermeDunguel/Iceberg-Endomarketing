import './Main.scss'
import { Eventlist } from './Eventlist/Eventlist'
import { LateralPopup } from './LateralPopup/LateralPopup'
import EventManagement from '../../context/EventManagementContext'
import { ManagementBoard } from './ManagementBoard/ManagementBoard'
import BoardManagement from '../../context/ManagementBoardContext'
import { FilterEvents } from '../../context/FilterEventsContext'

export default function Main() {

  return (
    <main>
      <div className="lateral-popup-mobile lateral-elements-mobile">
        <LateralPopup/>
      </div>

      <EventManagement >
        <FilterEvents >
          <Eventlist />
        </FilterEvents>
      </EventManagement>

      <BoardManagement>
        <div className='board-management-mobile lateral-elements-mobile'>
          <ManagementBoard id={1}/>
        </div>
        <div className='lateral-elements'>
          <LateralPopup />
          <ManagementBoard id={2} />
        </div>
      </BoardManagement>
    </main>
  )
}
