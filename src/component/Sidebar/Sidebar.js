import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBox, FaShoppingCart, FaTruck, FaBroadcastTower } from 'react-icons/fa';
import './Sidebar.css';
import Dashboard from '../../Pages/Dashboard';
import Orders from '../../Pages/Orders';
import Channels from '../../Pages/Channels';
import Inventory from '../../Pages/Inventory';
import Shipping from '../../Pages/Shipping';

const pages = [
  { path: '/dashboard', label: 'Dashboard', icon: <FaHome className="sidebar-icon" />, component: <Dashboard /> },
  { path: '/inventory', label: 'Inventory', icon: <FaBox className="sidebar-icon" />, component: <Inventory /> },
  { path: '/orders', label: 'Orders', icon: <FaShoppingCart className="sidebar-icon" />, component: <Orders /> },
  { path: '/shipping', label: 'Shipping', icon: <FaTruck className="sidebar-icon" />, component: <Shipping /> },
  { path: '/channels', label: 'Channels', icon: <FaBroadcastTower className="sidebar-icon" />, component: <Channels /> },
];

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleItemClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-width">
        <ul className="sidebar-menu">
          {pages.map((page, index) => (
            <li key={index} className={`sidebar-item ${selectedPage === page.label ? 'active' : ''}`}>
              <Link to={page.path} onClick={() => handleItemClick(page.label)}>
                {page.icon}
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
     <div className='container'> 
     <div className='card'>
        <p className='paragraph'>Pending</p>
        <p className='paragraph'>Accepted</p>
        <p className='paragraph'>AWB Created</p>
        <p className='paragraph'>Ready to ship</p>
        <p className='paragraph'>Completed</p>
        <p className='paragraph'>Cancelled</p>
     </div>
     {selectedPage && (
          <div>
            <h2>{selectedPage}</h2>
            {pages.find((page) => page.label === selectedPage)?.component}
          </div>
        )}

     </div>
      </div>
    
  );
};

export default Sidebar;
