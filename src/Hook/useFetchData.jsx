import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchData = (url) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    useEffect(()=>{
        setLoading( true )
        const dataFetch = async ()=>{
            try{
                const response = await axios.get(url)
                setData( response.data )
            }catch(error){
                console.error(error.message);

            }finally{
                setLoading(false)
            }
        }

        dataFetch();
    }, [url])

  return { data, loading }
}

export default useFetchData