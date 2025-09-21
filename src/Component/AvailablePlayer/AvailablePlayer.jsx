import React, { use } from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';


const AvailablePlayer = ({ fetchPlayers,availableBalance ,setAvailableBalance}) => {
    const players = use(fetchPlayers)
    console.log(players)
    
    return (
        <div className='max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 '>
           {players.map(player=><PlayerCart availableBalance={availableBalance}  setAvailableBalance={setAvailableBalance}  player={player}></PlayerCart>
             
           )}

        </div>
    );
};

export default AvailablePlayer;