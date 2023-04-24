import React,{useState, useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import { API_URL } from '../config'



const stripePromise = loadStripe("pk_test_51MyVWeGEWQFQAAhWrHV1ECri31axUPrvEqR3GlOjLgtH0VoSLVPaoPQkweaGpPZhCnS8HIPdeCoWEvsUSU9zRVjc00UCXzRa5C");

const csrftoken = getCookie('csrftoken');


function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}



const Checkout = () => {
   
    const [clientsecret, setClientSecret]=useState('')
    const {animechars_id}=useParams();
    console.log(animechars_id)
    useEffect(() => {
      const fetchData = async () => {
        try {  
          const response = await fetch(`${API_URL}/api/checkout-session/`, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "X-CSRFToken": csrftoken,
            },
            body: JSON.stringify(animechars_id),
          });
    
          if (!response.ok) {
            throw new Error("Failed to fetch data from the server.");
          }
    
          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);
    
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret:clientsecret
      };

     
  return (
    <div className='container'>
        {clientsecret && (
        <Elements  stripe={stripePromise} options={options}>
             <PaymentForm/>
        </Elements>
      )}
    </div>
  )
}

export default Checkout