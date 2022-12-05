import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-start justify-start mt-5 ml-5">
        {/* <!-- Page content here --> */}
        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side bg-base-500">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

          {/* <li><Link to="/dashboard/order/:serviceId"><img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/000000/external-glyph-travel-tanah-basah-glyph-tanah-basah-88.png"/>Order</Link></li> */}

          {admin ?

            <>
              <li><Link to="/dashboard/servicelist"><img src="https://img.icons8.com/ios-glyphs/20/000000/bag-front-view.png" />Service List</Link></li>

              <li><Link to="/dashboard/addservice"><img src="https://img.icons8.com/ios-glyphs/20/000000/plus.png" />Add Service</Link></li>

              <li><Link to="/dashboard/users"><img src="https://img.icons8.com/fluency-systems-regular/20/000000/add-administrator.png" />Make Admin</Link></li>
            </>
            : 
            <>
              
            <li><Link to="/dashboard/myorders"><img src="https://img.icons8.com/ios-glyphs/20/000000/bag-front-view.png"/>Service List</Link></li>
            <li> <Link to="/dashboard/review"> <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/20/000000/external-review-online-crash-course-inipagistudio-mixed-inipagistudio.png"/> Review</Link></li>
            </>
          }


        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
