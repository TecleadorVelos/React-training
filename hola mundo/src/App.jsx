import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'

export function App () {
   const users = [
    {userName: 'Tomas',
    name: 'Tomy Nabo'},

    {userName: 'Jorge',
    name: 'Giorg'},

    {userName: 'Nabocop',
    name: 'Copter'},

]
    return(
        <>
            <section className="app">
                
                {users.map(user => {
                    const {userName,name} = user
                    return(
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        ></TwitterFollowCard>
                    )
                })
            } 
                
            </section>
           
        </>
        
    )
}