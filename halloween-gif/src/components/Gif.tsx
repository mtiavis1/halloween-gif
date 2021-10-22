import '../app.css';
import { useAppSelector, useAppDispatch } from '../hook'

import { decrement, increment } from '../changeGif'

function Gif() {
  const index = useAppSelector((state) => state.indexer);
  console.log(index);

  const dispatch = useAppDispatch();
  
  const titleName:string = "HallowSurprise!";
    return (
        <div id='title'>{titleName}
        <button onClick={() => dispatch(increment())}>increment</button>
       <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
  }
  
export default Gif;