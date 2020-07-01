import React from 'react';

import './card.styles.css';


//为什么Card 方法里没有return呢？
//因为使用jsx中将代码包裹起来了，看作一行，
//仅仅是一行代码，不用return也会返回那一行代码
export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);

/*
这样写也是一样的

export const Card = props => {return (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
)};

*/
