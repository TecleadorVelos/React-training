import {useState} from 'react'

export function TwitterFollowCard ({userName = 'uknown', name}) {
    const [isFollowing,setIsFollowing] = useState(false)
    
    
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    //const textoDejarSeguir = texto = 'Siguiendo' ? 'Dejar de seguir': 'Siguiendo'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard' >
           <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="avatar" src={`https://unavatar.io/${userName}`} ></img>
            <div className='tw-followCard-info'>
                <strong>{name}</strong>
                <span className='tw-followCard-userName'>@{userName}</span>
            </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{texto}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button >  
            </aside> 
        </article>



    )
}
