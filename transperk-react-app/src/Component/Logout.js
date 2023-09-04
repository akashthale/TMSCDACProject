import { useHistory } from "react-router";
import Toast  from './ToastCompo/Toast';
// import { Toast } from "reactstrap";
import Swal from "sweetalert2";
const Logout =()=>{
    const history = useHistory()
    history.push('/Signin')
    Toast.fire({icon:'success',title:'Log Out Successfully',footer:'See You Again'});

    
    window.location.reload();
    // toast.success();
}
export default Logout;
