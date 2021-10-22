import '../app.css';

import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../hook'

import { decrement, increment } from '../changeGif'


function Gif() {
  const index = useAppSelector((state) => state.indexer.index);
  console.log(index);
  const titleName:string = "HallowSurprise!";
    return (
        <div id='title'>{titleName}</div>
    );
  }
  
export default Gif;