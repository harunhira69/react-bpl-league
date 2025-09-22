import React, { use } from 'react';
import PlayerCart from '../PlayerCart/PlayerCart';


const AvailablePlayer = ({ fetchPlayers,availableBalance ,setAvailableBalance,setPurchasePlayers,purchasePlayers}) => {
    const players = use(fetchPlayers)
   
    
    return (
        <div className='max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 '>
        {players.map(player=><PlayerCart purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance}  setAvailableBalance={setAvailableBalance}  player={player}></PlayerCart>
             
           )}

        </div>
    );
};

export default AvailablePlayer;