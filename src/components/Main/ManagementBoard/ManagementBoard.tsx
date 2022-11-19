import { useContext, useState } from 'react'
import { ManagementBoardContext } from '../../../context/ManagementBoardContext'
import { ComercialDemo } from './ComercialDemo/ComercialDemo'
import './ManagementBoard.scss'

interface ManagementBoardProps {
  id: number
}

export function ManagementBoard(props: ManagementBoardProps) {

  const BoardManagement = useContext(ManagementBoardContext)
  const listOfBoards = BoardManagement.listOfBoards

  return (
    <div className="management-board">
      <span className='management-board-title'>
        Quadros de Gestão à Vista
      </span>
        {listOfBoards.map(board =>
          <ComercialDemo
            key={parseInt(props.id + '' + board.key)} 
            id={board.id}
            title={board.title}
            resume_files={board.resume_files}
          />
        )}
    </div>
  )
}
