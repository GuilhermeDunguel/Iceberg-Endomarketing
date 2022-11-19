import { useState } from 'react'
import plusIcon from '../../../../assets/plus-icon.svg'
import triangleIcon from '../../../../assets/triangle-icon.svg'

import './EventlistButtons.scss'
import { TypeSelector } from './TypeSelector/TypeSelector'

export function EventlistButtons() {
  const [isTypeSelectorOpen, setIsTypeSelectorOpen] = useState(false)

  function handleSettingTypeSelectorState() {
    isTypeSelectorOpen ? 
    setIsTypeSelectorOpen(false) 
    : setIsTypeSelectorOpen(true)
  }

  return (
    <div className='newslist-buttons'>
      <div className='type-div'>
        <button className='content-filter-button button-default-style'
        onClick={handleSettingTypeSelectorState}
        >
          <span>TIPO</span>
          <img src={triangleIcon} alt="Triângulo para baixo representando uma lista de tipos de eventos" />
        </button>
          {isTypeSelectorOpen ? <TypeSelector /> : null}
      </div>
      <button className='content-creator-button button-default-style'>
        <span>CRIAR</span>
        <img src={plusIcon} alt="Sinal de mais representando a ação de criar" />
      </button>
    </div>
  )
}
