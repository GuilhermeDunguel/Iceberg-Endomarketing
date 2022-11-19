import React, { useState } from 'react'

import './LateralPopup.scss'

export function LateralPopup() {
   const [isPopupActive, setIsPopupActive] = useState(true);

  return (
   <>
      {isPopupActive ? 
      <div className='popup-container'>
         <span>Endomarketing</span>
         <p>
            Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.
         </p>
      <button
      onClick={(()=>{setIsPopupActive(false)})}
      >
         DISPENSAR
      </button>
      </div>
      : null
      }
    
   </>
  )
}
