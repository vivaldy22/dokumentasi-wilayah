import Swal from "sweetalert2";

const mySwal = ({
  title,
  text,
  icon,
  confirmColor,
  confirmText,
  allowOutsideClick,
  doNext,
  showCancel,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: confirmColor || "#3085d6",
    confirmButtonText: confirmText || "OK",
    allowOutsideClick: allowOutsideClick || false,
    showCancelButton: showCancel,
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.value) {
      doNext();
    }
  });
};

export default mySwal;
