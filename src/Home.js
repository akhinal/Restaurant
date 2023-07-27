import React, { useEffect, useState } from 'react'

import Cards from './Cards';


function Home() {

const [hotel,setdata]=useState([])
//api to geet datas
const fetchdata=async()=>{

  var result=await fetch('/restaurants (1).json')
  result.json().then(data=>setdata(data.restaurants))

}
console.log(hotel);
useEffect(()=>{
    fetchdata()
},[])



return (
    <div>
      
            
              
                             <Cards data={hotel}></Cards>
                
       
    </div>
  )
}

export default Home