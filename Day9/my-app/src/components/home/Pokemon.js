import React, {useState, useEffect} from "react";
import axios from "axios";


function Pokemon(params) {
    const [pokemones, setPokemones] = useState([])
        
    useEffect(() =>{
        getPokemones();
    }, [])

    const getPokemones = () =>{
        axios.get("https://incubator-devf.herokuapp.com/api/v1/get/all/active")
        .then(result => {
            console.log(result);
            const {data} = result;
            setPokemones(data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const showPokemones = () => {
        if (pokemones.length > 0) {
            return pokemones.map((elem, index)=>{
                return (<div className="card">
                <div className="card-body">
                <h5 className="card-title">Name: {elem.name}</h5>
                
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>);
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