import './BuscadorPk.css'
import { Lupa } from './Icons.jsx'
export function Buscador () {

    return (
            
        <div className='buscador-group' >
            
            <input  className='input-pk' placeholder='Pokemon Name'></input>
            <Lupa className='lupita'/>
        </div>       
    )
}