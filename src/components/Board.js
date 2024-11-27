import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ tickets, users, grouping, sorting }) => {
  const getPriorityName = (priority) => {
    const priorities = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return priorities[priority];
  };

  const groupTickets = () => {
    let groups = {};

    if (grouping === 'status') {
      tickets.forEach(ticket => {
        if (!groups[ticket.status]) groups[ticket.status] = [];
        groups[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      tickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        if (!groups[user.name]) groups[user.name] = [];
        groups[user.name].push(ticket);
      });
    } else if (grouping === 'priority') {
      tickets.forEach(ticket => {
        const priorityName = getPriorityName(ticket.priority);
        if (!groups[priorityName]) groups[priorityName] = [];
        groups[priorityName].push(ticket);
      });
    }

    // Sort tickets within each group
    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groups;
  };

  const groups = groupTickets();

  return (
    <div className="board">
      {Object.entries(groups).map(([groupName, groupTickets]) => (
        <Column 
          key={groupName}
          title={groupName}
          tickets={groupTickets}
          users={users}
        />
      ))}
    </div>
  );
}

export default Board;