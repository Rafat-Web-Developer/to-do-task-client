import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default RequireAuth;
