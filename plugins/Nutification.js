import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const Natification =(text,type) =>{
    createToast(text,{
      position:"top-right",
      type:type,
      transition:"slide",
    })
}
export default Natification;