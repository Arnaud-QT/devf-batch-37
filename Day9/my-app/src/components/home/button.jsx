import React, { useEffect, useState } from "react";

function Button(params){
    const [name, setName] = useState("Cargando nombre");
    const [lastName, setLastName] = useState("Cargando apellido");

    useEffect(()=>{
        alert("Usando effect");
        setTimeout(()=>{
            setName("Cristian");
        }, 2000);
    }, [name]);

    const changeName = () => {
        return setLastName("Gutierrez");
    };

    return(
        <div>
            <h3>
                {name} {lastName}
            </h3>
            <button onClick={changeName}>Click here</button>
        </div>
    );
}

export default Button;