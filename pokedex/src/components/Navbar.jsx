import './Navbar.css'
import { SelectorTheme } from './SelectorTheme'
export function Navbar ({isChecked, handleSliderChange}) {

return (
    <div className={`navbar-container ${isChecked ? 'activado' : 'desactivado'}`}>   
        <img src='https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png' alt='imagen de pokemon'></img>

       <SelectorTheme functCambio={handleSliderChange} ></SelectorTheme>

        <div className={`paginas-container ${isChecked ? 'activado' : 'desactivado'}`}>
            <span>Home</span>
            <span>About the Creator </span>
        </div>
    </div>
    )
    
}