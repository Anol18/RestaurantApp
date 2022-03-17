import React, { useState } from "react";
import './Restaurant.css'
import Menu from './Menuapi'
import MenuCard from "./MenuCard";

const Restaurant = () => {
   
 const[data,setData]= useState(Menu);
const handelCatagory = (catagory) =>{

  const updateList = Menu.filter((curElem)=>{
     return curElem.catagory === catagory;
  });
  setData(updateList);

}



  return (
    <>

    <div className="container d-flex justify-content-center" id="menuButton">
      
     <button type="button" onClick={()=>handelCatagory("breakfast")} className="btn  mx-1 cust">Breakfast</button>
     <button type="button" onClick={()=>handelCatagory("lunch")} className="btn  mx-1 cust">Lunch</button>
     <button type="button" onClick={()=>handelCatagory("dinner")} className="btn  mx-1 cust">dinner</button>
     <button type="button" onClick={()=>setData(Menu)} className="btn  mx-1 cust">All</button>
     </div>
     


     
     <div className="container bg-secondary bg-gradient">
     <div className='row'>
       {data.map((element)=>{
         return (
          <div className='col-md-4 my-3' key={element.id}>
          <MenuCard  title={element.name} description={element.description} image={element.image} price={element.price}/>
                      </div>

         );

       })}
       </div>


     </div>
     
     </>
  );
};

export default Restaurant;
