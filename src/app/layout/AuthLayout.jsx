import { Navigate } from "react-router";

const AuthLayout = () => {
  return (
    <div>
        //temporary untill login is not made
      <Navigate to={'/main'} />
    </div>
  );
};

export default AuthLayout;