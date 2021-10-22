import '../app.css';
import { useAppSelector, useAppDispatch } from '../hook';

import { reset, increment } from '../changeGif';

function Gif() {
  const gifs = useAppSelector((state) => state.indexer.gifs);
  const index = useAppSelector((state) => state.indexer.index);
  console.log(index);

  const dispatch = useAppDispatch();
  console.log(gifs);
  
  const titleName:string = "HallowSurprise!";
    return (
      <>
        <div id="center">
        <div><button onClick={() => dispatch(increment())}>next</button> </div>
        <div><button onClick={() => dispatch(reset())}>reset</button> </div>
        <div>
        <img src={gifs[index]} alt="loading..."/>
        </div>
        </div>
      </>
    );
  }
  
export default Gif;