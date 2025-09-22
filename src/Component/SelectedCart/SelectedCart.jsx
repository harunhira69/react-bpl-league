import React from 'react';
import vector from '../../assets/Vector.png';

const SelectedCart = ({player,removePlayer}) => {
   
    const handleDelete=()=>{
        removePlayer(player)
    }
    return (
        <div>
             <div className='border-2 border-gray-400 rounded-lg p-3 flex justify-between items-center mt-4'>
            <div className='flex items-center gap-4'>
             <img className='h-[80px] rounded-lg' src={player.player_image}></img>
             <div>
                <h3 className='font-bold'>{player.player_name}</h3>
                <p>{player.batting_style}</p>
             </div>
            </div>

            <div onClick={handleDelete} className=''>
                <img  src={vector}></img>

            </div>
        </div>
        </div>
    );
};

export default SelectedCart;