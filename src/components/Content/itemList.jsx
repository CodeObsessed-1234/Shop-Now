import React from 'react'
import Item from './item'
import "./itemList.css"

export default function itemList(props) {
  return (
    <div className="items-list" data-aos="fade-in">
      <div className='title'>
        <h1>{props.title}</h1>
      </div>
      <div className="items" >
        <Item src={props.src} name="Cloth" price="70$" avail="Yes"/>
        
        <Item src={props.src} name="Cloth" price="70$" avail="Yes"/>
        
        <Item src={props.src} name="Cloth" price="70$" avail="Yes"/>
        
        <Item src={props.src} name="Cloth" price="70$" avail="Yes"/>
        
        <Item src={props.src} name="Cloth" price="70$" avail="Yes"/>
        
      </div>
    </div>
  )
}
