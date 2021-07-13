import React, { Fragment } from "react";
import Swal from "sweetalert2";

const Alerta = (props) => {
  console.log("Desde alerta");
  const showMessage = () => {
    Swal.fire(
      "¡Ganaste! =D",
      `Al parecer el ${props.chosenNumber} es tu número de la suerte =)`,
      "success"
    );
  };
  return <Fragment>{showMessage()}</Fragment>;
};

export default Alerta;
