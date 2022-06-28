import {  faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faFileText, faMessage, faRemove, faReply, faShop, faSquareRootVariable, faStreetView } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-start justify-start mt-5 ml-5">
          {/* <!-- Page content here --> */}
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
        </div> 
        <div class="drawer-side bg-base-500">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

            <li><Link to="/dashboard/order"> <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>Order</Link></li>
            <li><Link to="/dashboard/servicelist"> <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>Service List</Link></li>
            <li><a>    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />Review</a></li>
          
          </ul>  
          </div>
      </div>
    );
};

export default Dashboard;