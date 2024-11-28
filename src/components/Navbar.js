import React, { useState } from 'react';
import './Navbar.css';
import DisplayLogo from '../Assets/icons_FEtask/Display.svg'; 
import DownIcon from '../Assets/icons_FEtask/down.svg'; 

const Navbar = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="display-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <img src={DisplayLogo} alt="Display Logo" className="display-logo" /> {/* Display logo */}
        <span>Display</span>
        <img src={DownIcon} alt="Dropdown Icon" className="dropdown-icon" /> {/* Dropdown icon */}
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
