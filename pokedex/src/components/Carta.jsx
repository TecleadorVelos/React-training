import { TipoPK } from "./Poketipo";

export function CartaPK ({imagenPK, nombre, imagenTP, tipo, id,checked}) {
    
    const tipo2 = Array.isArray(tipo) ? [...tipo] : [];
    const getTipo = (tip) => {
        switch (tip) {
            case "bug":
              return "bug"
            
            case "dark":
              return "dark"
            
            case "dragon":
              return "dragon"
            
            case "electric":
              return "electric"
            
            case "fairy":
                return "fairy"
            
            case "fighting":
                return "fighting"
            case "fire":
                return "fire"
            case "flying":
                return "flying" 
            case "ghost":
                return "ghost"
            case "grass":
                return "grass"
            case "ground":
                return "ground"
            case "ice":
                return "ice"
            case "normal":
                return "normal"
            case "poison":
                return "poison"
            case "psychic":
                return "psychic"
            case "rock":
                return "rock"
            case "steel":
                return "steel"
            case "water":
                return "water"
        }
    }
    return (
        <div className={`carta ${checked ? 'activado' : 'desactivado'}`}>
                
            <span className='id-pk'>#{id}</span>
            <img className='imagenPrincipalPK' src={imagenPK}/>
           
           <div>
                <img className='imagenTipo'>{imagenTP}</img>
                {
                    tipo2.map(tipoelem => (<TipoPK tipo={tipoelem.type.name}> </TipoPK>)) 
                }
           </div>

            <div className={`banner-nombre ${getTipo(tipo2[0].type.name)}`}>
                <span className='nombre'>{nombre}</span>
            </div>
        </div>
    )   
}
