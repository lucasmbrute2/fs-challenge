import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

type ToastColor = "success" | "failed";
const toastColors = {
  success: "#96c93d",
  failed: "#AB222E",
};

export function showToast(background: ToastColor, override?: Toastify.Options) {
  Toastify({
    text: "This is a toast",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: toastColors[background],
    },
    ...override,
  }).showToast();
}
