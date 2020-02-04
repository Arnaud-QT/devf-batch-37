import React, {useState, useEffect} from "react";
import axios from "axios";


function Pokemon(params) {
    const [pokemones, setPokemones] = useState([])
        
    useEffect(() =>{
        getPokemones();
    }, [])

    const getPokemones = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(result => {
            const {results} = result.data;
            setPokemones(results);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const showPokemones = () => {
        if (pokemones.length > 0) {
            return pokemones.map((elem, index)=>{
                return <li key={index}>{elem.name}</li>;
            })
        }
    }

return(<div>
    <ul id="pokemones">
        {showPokemones()}
    </ul>
</div>)
}

export default Pokemon