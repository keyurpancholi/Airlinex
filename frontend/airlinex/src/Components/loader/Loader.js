import './Loader.css';
import React, {useState,useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";

function Loader() {

    const [loading,setLoading]=useState(false);

    useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
                },8000)
        },[])
  return (
    <div className='loader'>
    {
        loading ?

        <HashLoader
        color='#4296c7'
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

        :
        <div>Loading</div>
    }
    </div>
    
  )
}

export default Loader