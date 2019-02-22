import React from 'react';
import { AnimateOnChange } from '@nearform/react-animation';

const { useState, useEffect } = React

const { AnimateOnChange, HideUntilLoaded } = ReactAnimation

const Output = () => {
  const words = [
    'Harry Truman', 
    'Doris Day', 
    'Red China', 
    'Johnnie Ray',
    'South Pacific', 
    'Walter Winchell', 
    'Joe DiMaggio',
    'Joe McCarthy', 
    'Richard Nixon', 
    'Studebaker', 
    'television',
    'North Korea', 
    'South Korea', 
    'Marilyn Monroe',
    'Rosenbergs', 
    'H-bomb', 
    'Sugar Ray', 
    'Panmunjom',
    'Brando', 
    'The King and I',
    'The Catcher in the Rye',
    'Eisenhower', 
    'vaccine', 
    'England\'s got a new queen',
    'Marciano', 
    'Liberace',
    'Santayana',
    'goodbye',
    'We didn\'t start the fire',
    'It was always burning',
    'Since the world\'s been turning',
    'We didn\'t start the fire',
    'No we didn\'t light it',
    'But we tried to fight it'
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === words.length - 1) {
        setCurrent(0)
      } else {
        setCurrent(current + 1)
      }
    }, 1000);
    return (() => {
      clearInterval(interval)
    })
  })
  
  return (
    <div>
      <h1><AnimateOnChange animationOut="bounceOut" animationIn="bounceIn" durationOut="500">{words[current]}</AnimateOnChange></h1>
    </div>
  )
}


export default Output;