
import { useEffect, useState } from 'react'
import './App.css'
import './components/Carta.css'
import './components/Poketipo.css'
import {CartaPK} from './components/Carta.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Lupa } from './components/Icons.jsx'
import { Buscador } from './components/BuscadorPk.jsx'

export function App() {
  // Estado para controlar si el slider está activado o no
  const [isChecked, setIsChecked] = useState(true);

  // Función para cambiar el estado cuando el slider es activado/desactivado
  const handleSliderChange = () => {
    setIsChecked(!isChecked);
  };

  //me traigo a los pokemones con una variable
  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const getPokemones = async () => {
      //recuperamos el listado de los pokemones
      const response = await fetch ("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      const listaPokemones = await response.json()
      const {results} = listaPokemones
      
      const newpokemones = results.map( async (pokemon) => { 
        const response = await fetch(pokemon.url)
        const poke = await response.json()

        return {
          id: poke.id,
          name: poke.name,
          img:poke.sprites.other.dream_world.front_default,
          type:poke.types
          
        }
      })
      console.log(newpokemones)
      setPokemones(await Promise.all(newpokemones))
    }
   
    getPokemones()
  }, [])

  return (
    <>
      <Navbar isChecked={isChecked} handleSliderChange={handleSliderChange}></Navbar>
      <div className='encabezado-PK'>
        <img className='imagen-title' src='/pokeball.svg'></img>
        <h1 className='title'>Pokédex</h1>
      </div>
      
      <div className='buscador-selector'>
        <div className='buscador-b'>
          <Buscador/>
          <button>Buscar</button>
        </div>
        
        <select>

        </select>
      </div>
      <div className='contenedor-cartasPK'>
          {
            pokemones.map(pokemon => {
              return(<CartaPK  nombre={pokemon.name} id={pokemon.id} imagenPK={pokemon.img} tipo={pokemon.type} checked={isChecked}   ></CartaPK>)
              
            })
          }
            
      </div>
      <div className='paginacionPK'>
        <button></button>
        <p>Elemento paginacion</p>
        <button></button>
      </div>
    </>
      
    
  )
}


