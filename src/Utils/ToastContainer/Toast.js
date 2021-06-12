import {
    ToastContainer,
    //Flip, 
    Zoom
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../ToastContainer/Toast.module.scss';

const Toast = () => {
    return (
        <div className={s.toast}>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
        />
        </div>
    )
  
}

export default Toast;