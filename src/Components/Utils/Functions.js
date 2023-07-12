import moment from 'moment';
import {toast} from 'react-toastify'
import Swal from 'sweetalert2';

export const sitename = 'stationarystore'


export const ToastAlert = (message) => {
    return toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const SwalAlert = (title, text, icon) => {
    return Swal.fire({
        title,
        text,
        icon,
        showConfirmButton: false
    })
}

export const getRandomObjectsFromArray = (array, count)  => {
    if (count > array.length) {
      throw new Error("Count should be less than or equal to the array length.");
    }
  
    const randomObjects = [];
  
    while (randomObjects.length < count) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomObject = array[randomIndex];
  
      if (!randomObjects.includes(randomObject)) {
        randomObjects.push(randomObject);
      }
    }
  
    return randomObjects;
  }
export const formatDate = (time) => {
  return moment(time).format('DD-MMMM-YYYY h:sA')
}  

