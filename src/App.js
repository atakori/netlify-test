import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByNumber, loginUser } from './actions';

function App() {
  // We can use 'useSelector' in order to get access to the global state
  // We can get the specific peive of the global state that we need by using the 
  // same keywords that we specified in the masterReducer file 
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  console.log(loggedIn);

  // 'useDispatch' is used to call our Actions (AKA what we would like to do)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter goes here: {counter}</p>
      {/* <button onClick={() => console.log("Adding ONE!")}>Increment</button> */}

      {/* We can import our actions and activate our different reducer functions by calling the actions
      inside of the dispath */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByNumber(5))}>Increment By 5</button>
      <button onClick={()=> dispatch(loginUser())}>LOGIN</button>

      {/* TERIATIARY STATEMENT */}
      {/* Think of this as a If/else statement. IF the user is loggedIn, THEN we will see the Super Secret Message */}
      {/* ELSE we will show nothing. We can use this to show different html or component depending on a variable value */}
      {loggedIn ? <p>SUPER SECRET MESSAGE</p> : ''}
      
    </div>
  );
}

export default App;
