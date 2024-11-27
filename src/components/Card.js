import React from 'react';
import './Card.css';
import NoPrio from '../Assets/icons_FEtask/No-priority.svg';
import LowPrio from '../Assets/icons_FEtask/Img - Low Priority.svg';
import MidPrio from '../Assets/icons_FEtask/Img - Medium Priority.svg';
import HighPrio from '../Assets/icons_FEtask/Img - High Priority.svg';
import UrgentPrio from '../Assets/icons_FEtask/SVG - Urgent Priority colour.svg';

const Card = ({ ticket, user }) => {

  const getPriorityIcon = (cond) => {
    if(cond == '4') return UrgentPrio
    if(cond == '3') return HighPrio
    if(cond == '2') return MidPrio
    if(cond == '1') return LowPrio
    if(cond == '0') return NoPrio
  }

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name[0]}
          <span className={`status-indicator ${user?.available ? 'available' : 'away'}`}></span>
        </div>
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-footer">
        <div className="priority-tag">
          <img src={getPriorityIcon(ticket.priority)}></img>
        </div>
        <div className="feature-tag">
          <div className='circle'></div>
          <p className='feature'>{ticket.tag.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;