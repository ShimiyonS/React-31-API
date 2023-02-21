import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    let isLoggedin = localStorage.getItem("loggedin");
        if (isLoggedin === "jwejdfodsj-sdfnsdofsdjosdjf-wenrwelrm-saodfjsddom-sndfd") {
        return props.children;
    }else {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;