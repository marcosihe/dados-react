import React from "react";
import DadoSeis from "./dices/DadoSeis";
import DadoCinco from "./dices/DadoCinco";
import DadoCuatro from "./dices/DadoCuatro";
import DadoTres from "./dices/DadoTres";
import DadoDos from "./dices/DadoDos";
import DadoUno from "./dices/DadoUno";

const Dado = (props) => {
    const dices = {
        1 : <DadoUno/>,
        2 : <DadoDos/>,
        3 : <DadoTres/>,
        4 : <DadoCuatro/>,
        5 : <DadoCinco/>,
        6 : <DadoSeis/>
    }
  return (
    <div>
      {dices[props.diceNumber]}
    </div>
  );
};

export default React.memo(Dado);
