import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import useFetchData from '../../Hook/useFetchData';

const TextTyping = () => {

    const url = '/HeroTypingText.json'
    const { data } = useFetchData(url)
    const [ sequence, setSequence] = useState([])
    console.log(data);
    

    useEffect(()=>{
      if( data && data.length > 0) {
        const newSequence = data.flatMap((item)=> 
          [
          item.title,
          1000,
        ]);
        setSequence(newSequence)
      }
      
    }, [data])

  return (
    <>
    { sequence.length > 0 && (
        <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={10}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
      )
    }
    </>
  )
}

export default TextTyping