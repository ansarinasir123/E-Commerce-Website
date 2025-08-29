
import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import "./CartCard.css"
import image1 from "../../assets/image1.jpg"
import { useDispatch } from 'react-redux';
import "./CartCard.css"
import { RemoveItem } from '../../redux/cartSlice';


function CartCard({name,price,image,id}) {
    let dispatch=useDispatch()
  return (
    <div className='CartCard'>
        <div className="left-card">
            <img src={image} alt="samsung product" />
            <div className="name-price">
                <span>{name}</span>
                <span>Rs {price}</span>
            </div>
        </div>
        <div className="right-card">
      <button onClick={()=>{
        dispatch(RemoveItem(id))
         alert("Product Remove Successfully..")
      }}> Remove <RiDeleteBin6Line /> </button>
    </div></div>
  )
}

export default CartCard


