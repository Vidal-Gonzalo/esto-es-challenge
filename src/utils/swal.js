import Swal from "sweetalert2";

export const swalConfirmation = (title, action, confirmedText, deniedText) =>
  Swal.fire({
    customClass: {
      title: "modal-text",
      confirmButton: "modal-text",
      denyButton: "modal-text",
    },
    title,
    showDenyButton: true,
    confirmButtonText: "Delete",
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(confirmedText, "", "success");
      action();
    } else if (result.isDenied) {
      Swal.fire(deniedText, "", "warning");
    }
  });

export const swalSuccess = (title) =>
  Swal.fire({
    title,
    icon: "success",
    confirmButtonText: "Done!",
    width: "400px",
    timer: 20000,
    timerProgressBar: true,
  });
