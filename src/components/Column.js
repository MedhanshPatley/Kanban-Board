import React, { useState} from 'react';
import Card from './Card';
import './Column.css';
import Plus from '../Assets/icons_FEtask/add.svg';
import Dots from '../Assets/icons_FEtask/3 dot menu.svg';
import Todo from '../Assets/icons_FEtask/To-do.svg';
import Backlog from '../Assets/icons_FEtask/Backlog.svg';
import Progress from '../Assets/icons_FEtask/in-progress.svg';
import NoPrio from '../Assets/icons_FEtask/No-priority.svg';
import LowPrio from '../Assets/icons_FEtask/Img - Low Priority.svg';
import MidPrio from '../Assets/icons_FEtask/Img - Medium Priority.svg';
import HighPrio from '../Assets/icons_FEtask/Img - High Priority.svg';
import UrgentPrio from '../Assets/icons_FEtask/SVG - Urgent Priority colour.svg';


const Column = ({ title, tickets, users }) => {

  const [grouping, setGrouping] = useState(localStorage.getItem('grouping'));
  console.log(grouping);

  const getGroupingIcon = (cond) => {
    console.log(grouping)
    if(grouping == 'status'){
      console.log(grouping)
      console.log(cond)
      if(cond == 'Todo') return Todo;
      if(cond == 'In progress') return Progress;
      if(cond == 'Backlog') return Backlog;
    }

    if(grouping == 'priority'){
      console.log(grouping)
      console.log(cond)
      if(cond == 'Urgent') return UrgentPrio;
      if(cond == 'High') return HighPrio;
      if(cond == 'Medium') return MidPrio;
      if(cond == 'Low') return LowPrio;
      if(cond == 'No priority') return NoPrio;
    }

    if(grouping == 'user'){
      console.log(grouping)
    }
  }
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left">
          {(grouping === 'status' || grouping === 'priority') && (
            <img src={getGroupingIcon(title)} alt={title} />
          )}
          
          {(grouping === 'user') && (
            <div className="user-icon">{title[0]}</div>
          )}
          <p>{title}</p>
          
          <p className="ticket-count">{tickets.length}</p>
        </div>
        <div className="column-header-right">
          <img src={Plus} alt="plus-icon"></img>
          <img src={Dots} alt="dots-icon"></img>
        </div>
      </div>
      <div className="column-content">
        {tickets.map(ticket => (
          <Card 
            key={ticket.id}
            ticket={ticket}
            user={users.find(u => u.id === ticket.userId)}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;