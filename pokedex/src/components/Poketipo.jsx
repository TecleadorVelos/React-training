export function TipoPK({tipo}) {
    let nombreClase= "";
    switch(tipo) {
        case "normal":
            nombreClase = 'tipo-pk-normal'
            break;
        case "bug":
            nombreClase = 'tipo-pk-bug'
            break;
        case "dark":
            nombreClase = 'tipo-pk-dark'
            break;
        case "dragon":
            nombreClase = 'tipo-pk-dragon'
            break;
        case "electric":
            nombreClase = 'tipo-pk-electric'
            break;
        case "fairy":
            nombreClase = 'tipo-pk-fairy'
            break;
        case "fighting":
            nombreClase = 'tipo-pk-fighting'
            break;
        case "fire":
            nombreClase = 'tipo-pk-fire'
            break;
        case "flying":
            nombreClase = 'tipo-pk-flying'
            break;
        case "ghost":
            nombreClase = 'tipo-pk-ghost'
            break;
        case "grass":
            nombreClase = 'tipo-pk-grass'
            break;
        case "ground":
            nombreClase = 'tipo-pk-ground'
            break;
        case "ice":
            nombreClase = 'tipo-pk-ice'
            break;
        case "poison":
            nombreClase = 'tipo-pk-poison'
            break;
        case "psychic":
            nombreClase = 'tipo-pk-psychic'
            break;
        case "rock":
            nombreClase = 'tipo-pk-rock'
            break;
        case "steel":
            nombreClase = 'tipo-pk-steel'
            break;
        case "water":
            nombreClase = 'tipo-pk-water'
            break;
    }
        
    return ( <span className={nombreClase}>{tipo}</span>)

    
}