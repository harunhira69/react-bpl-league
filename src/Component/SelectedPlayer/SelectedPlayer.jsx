import React from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';


const SelectedPlayer = ({purchasePlayers,removePlayer}) => {
   
    return (
        <div className='max-w-[1200px] mx-auto'> 
        {purchasePlayers.map(player=><SelectedCart removePlayer={removePlayer} player={player}></SelectedCart>)}
       
         
        </div>
    );
};

export default SelectedPlayer;