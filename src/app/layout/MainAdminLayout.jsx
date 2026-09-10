import {Outlet} from 'react-router';
import Navbar from '../../features/admin/shared/ui/components/Navbar';

const MainAdminLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainAdminLayout;
