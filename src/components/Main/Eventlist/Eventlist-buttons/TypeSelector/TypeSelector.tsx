import { useContext } from 'react'
import { FilterEventsContext } from '../../../../../context/FilterEventsContext'
import './TypeSelector.scss'

export function TypeSelector() {

  const FilterContextData = useContext(FilterEventsContext)

  const checkboxes = FilterContextData.checkboxes
  const handleFilteringEvents = FilterContextData.handleFilteringEvents
  const onCheckboxChange = FilterContextData.onCheckboxChange

  return (
    <form className="type-selector">
      {checkboxes?.map(checkbox =>
        <div key={checkbox.id} className='input-div'>
          <input onChange={(e) => onCheckboxChange(e, checkbox.id)} type="checkbox" id={checkbox.id} value={checkbox.value.toString()} />
          <label className='input-label' htmlFor={checkbox.id}>{checkbox.title}</label>
        </div>
      )}
      
      <button
        type='submit'
        onClick={handleFilteringEvents}
      >
        Filtrar
      </button>
    </form>
  )
}
