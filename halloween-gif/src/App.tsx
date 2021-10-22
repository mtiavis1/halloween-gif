import React from 'react';
import Header from './components/Header'
import './app.css'
import Gif from './components/Gif';
import { increment, reset } from "./changeGif";
import { useSelector } from "react-redux";


function App() {
  const { index } = useSelector((state) => state.indexer)
  console.log(index);
  //const { index } = useSelector()
  return (
    <>
    <Header></Header>
    <Gif></Gif>
    </>
  );
}

export default App;
