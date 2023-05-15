import React from 'react'
import Image from "next/image";
import ferroGrigio from '../assets/images/icons/ferrogrigioscuro.png'
import ferroDisattivato from '../assets/images/icons/ferrogrigio.png'
import ferroAttivo from '../assets/images/icons/ferrogiallo.png'

export default function Meter({value,theme}:{value:number,theme:'light'|'dark'}) {
  
  return (
    <div className='grid grid-cols-5 w-2/3 lg:w-1/2'>
        {(() => {
            const active = [];
            for (let i = 0; i < value; i++) {
                active.push(<div key={i}><Image src={ theme === 'light' ? ferroGrigio : ferroAttivo } alt={''}></Image></div>);
            }
            return active;
        })()}
        {(() => {
            const disattivato = [];
            for (let i = 0; i < (5-value); i++) {
                disattivato.push(<div key={i}><Image src={ferroDisattivato} alt={''} className='opacity-30'></Image></div>);
            }
            return disattivato;
        })()}
    </div>
  )
}
