import '../app.css';
import { useAppSelector, useAppDispatch } from '../hook';

import { increment } from '../changeGif';

function Gif() {
  const gifs = useAppSelector((state) => state.indexer.gifs);
  const index = useAppSelector((state) => state.indexer.index);

  const dispatch = useAppDispatch();
  
    return (
      <>
        <div id="center">
        <div><button onClick={() => dispatch(increment())}>next</button> </div>
        <div>
        <img src={gifs[index]} alt="loading..."/>
        </div>
        </div>
      </>
    );
  }
  
export default Gif;