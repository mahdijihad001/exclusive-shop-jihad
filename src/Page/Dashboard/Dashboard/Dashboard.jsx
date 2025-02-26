import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminMenu from './AdminMenu';

const Dashboard = () => {

  const user = useSelector((state) => state.authUser.user);



  const renderAdminMenu = () => {
    if (user?.role === "admin") {
      return <AdminMenu/>
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You are not admin!",
        showConfirmButton: false,
        timer: 1500
      });
      return <Navigate to={`/singIn`} replace={true} />
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container max-w-[1350px] mx-auto flex flex-col lg:flex-row gap-5">
        {/* Admin Menu */}
        <div className="w-full lg:w-1/6 p-5 h-screen flex flex-col dashboardShadow">
          <Link className='font-bold text-4xl' to={"/"}>Exclusive</Link>
          {
            renderAdminMenu()
          }
        </div>
        {/* All Content */}
        <div className="w-full lg:w-5/6 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );

};

export default Dashboard;



