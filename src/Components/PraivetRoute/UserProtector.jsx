import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserProtector = ({ children }) => {

    const user = useSelector((state) => state.authUser.user);

    if (!user) {
        Swal.fire({
            title: "Please login!",
            icon: "error",
            draggable: true
        });
        return <Navigate to={"/login"} />
    };
    return children

}

export default UserProtector