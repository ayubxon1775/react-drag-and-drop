import './Task.css'

import { useSortable, UseSortable } from '@dnd-kit/sortable'
import {CSS} from "@dnd-kit/utilities"


export const Task = ({id, title}) => {
    const {attributes,listeners, setNodeRef,
         transform, transition } = 
         useSortable({id});
         const style = {
            transition,
            transform: CSS.transform.toString(transform)
         };

  return (
     <div ref={setNodeRef} 
     {...attributes}
     {...listeners}
      className='task'>

    <input type="checkbox" className='checkbox' />
    {title}
    </div>
  )
}

