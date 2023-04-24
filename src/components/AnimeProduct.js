import React, {useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import { API_URL } from '../config'


const AnimeProduct = () => {
    const [animeprod, setAnimeProd]=useState({
        id:0,
        anime_name:"",
        anime_image:"",
        price:""
    })
    let {animechars_id}=useParams();
    let navigate=useNavigate()

    useEffect(() => {
        getAnimeChars();  
    }, [animechars_id])

    const getAnimeChars = async () =>{
        let response= await fetch(`${API_URL}/api/animeproduct/${animechars_id}/`)
        let data= await response.json()
        setAnimeProd(data)
        
        console.log(data)
    }
  const handleCheckout=()=>{
         navigate(`/checkout/${animeprod.id}`)
    }
    return (
        <div className='container'>
            <div className='card'>
                <img src={animeprod?.anime_image} alt="" className='p_img'/>
                <div>
                    <h3>{animeprod?.anime_name}</h3> 
                    <p>${animeprod?.price}</p>
                </div>
                    <button onClick={handleCheckout} className='btn'>
                        Checkout
                    </button>
            </div>
        </div>
    )
}

export default AnimeProduct