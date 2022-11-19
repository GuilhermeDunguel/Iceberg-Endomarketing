import axios from "axios"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

interface APIDataProps {
  children: ReactNode;
}

export interface BoardItemInterface {
  key: number;
  id: string;
  title: string;
  resume_files: [{
    file: string;
  }]
}

interface ContextProps {
  listOfBoards: BoardItemInterface[];
  setListOfBoards: Dispatch<SetStateAction<BoardItemInterface[]>>
  handleDeletingBoard: (id: string) => void;
}
 
export const ManagementBoardContext = createContext<ContextProps>({} as ContextProps);

export default function BoardManagement({children}: APIDataProps) {

  const [listOfBoards, setListOfBoards] = useState<BoardItemInterface[]>([{} as BoardItemInterface]);

  function handleDeletingBoard(id: string) {
    const newArrayOfBoards = listOfBoards.filter(event => event.id !== id)
    setListOfBoards(newArrayOfBoards);
  };
  useEffect(() => {
    axios.get('https://api.npoint.io/9e61d1016940dcb99734')
    .then((response) => response.data.data)
    .then((data: any) => {
      {
        setListOfBoards(data[0].boards.map((board: BoardItemInterface, index: number) => {
        return {
          ...board,
          id: encodeURI(board.title),
          key: index + 1
        }
      }))};
    }
      )
    .catch(error => console.log(error))
  }, []);

  return (
    <ManagementBoardContext.Provider value={{listOfBoards, setListOfBoards, handleDeletingBoard}}>
      {children}
    </ManagementBoardContext.Provider>
  )
}
