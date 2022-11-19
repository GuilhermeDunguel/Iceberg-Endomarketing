import planetIcon from '../../../../assets/planet-icon.svg'
import dotsIcon from '../../../../assets/dots-icon.svg'

import './ComercialDemo.scss'
import { BoardItemInterface, ManagementBoardContext } from '../../../../context/ManagementBoardContext'
import { useContext, useState } from 'react'

export function ComercialDemo(props: BoardItemInterface) {

  const ManagementBoardContextData = useContext(ManagementBoardContext)
  const handleDeletingBoard = ManagementBoardContextData.handleDeletingBoard
  
  const [isDeleteMenuOpen, setIsDeleteMenuOpen] = useState(false)
  
  return (
    <div key={props.id} className="comercial-demo">
      <header>
        <span className="board-title">{props.title}</span>
        <div className="right-buttons-div">
          <button className="right-button">
            <img src={planetIcon} alt="Ícone do planeta terra, simbolizando que o quadro é público." />
          </button>
          <div> 
            <button className="right-button"
              onClick={() =>
                isDeleteMenuOpen ?
                setIsDeleteMenuOpen(false)
                : setIsDeleteMenuOpen(true)}
            >
              <img src={dotsIcon} alt="Ícone de três pontinhos, simbolizando uma seção a mais." />
            </button>
            {isDeleteMenuOpen ? 
              <button className='delete-board-button'
                onClick={() => handleDeletingBoard(props.id)}
              > 
                  Deletar quadro
              </button>
            : null}
          </div>
        </div>
      </header>
      <div className="comercial-images-div">
        {props.resume_files?.map(image => <img key={image.file} className="comercial-images" src={image.file} alt="Imagens comerciais de demonstração"/>)}
      </div>
    </div>
  )
}


