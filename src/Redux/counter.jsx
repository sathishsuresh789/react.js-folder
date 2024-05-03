import { useDispatch, useSelector } from "react-redux";
import {selectcount,increment,decrement} from '../Redux/counterReducer'
function Counter(){
    const dispatch = useDispatch();
    const reduxdata = useSelector(selectcount);
    return(
        <>
        <p>{reduxdata}</p>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}
export default Counter
