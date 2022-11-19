import { createContext, ReactNode, useState } from 'react'

interface FilterEventsDefault {
  title: string;
  tag: string;
  id: string;
  value: boolean;
}

interface FilterEventsInterface {
  checkboxes: FilterEventsDefault[];
  filter: string[];

  handleFilteringEvents: (event: any) => void;
  onCheckboxChange: (event: any, id: string) => void;
}

interface FilterContextChildren {
  children: ReactNode,
}

export const FilterEventsContext = createContext<FilterEventsInterface>({} as FilterEventsInterface);

export function FilterEvents({children}: FilterContextChildren) {

  const [filter, setFilter] = useState<string[]>([]);

  const [checkboxes, setCheckboxes] = useState<FilterEventsDefault[]>([
    {title: 'Event', tag:'event', id: '1', value: false},
    {title: 'Release', tag: 'release', id: '2', value: false},
    {title: 'Publication', tag: 'publication', id: '3', value: false}
  ]);

  function handleFilteringEvents(event: any) {
    event.preventDefault();
    const filteredArray = checkboxes.filter(event => event.value === true).map(event => event.tag);

    setFilter(filteredArray);
  };

  function onCheckboxChange(event: any, id: string) {
    const newCheckboxes = checkboxes.map(checkbox => {
      if(checkbox.id === id) {
        checkbox.value = event.target.checked
      }
      return checkbox;
    });
    setCheckboxes(newCheckboxes);
  };

  return (
    <FilterEventsContext.Provider value={
     {checkboxes, filter, handleFilteringEvents, onCheckboxChange}
    }>
      {children}
    </FilterEventsContext.Provider>
  )
}
