import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const showToastMessage = (message, type) => {
  if (type === "positive") {
    toast.success(`${message} !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else {
    toast.error(`${message} !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export { showToastMessage };