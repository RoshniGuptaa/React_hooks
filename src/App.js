import './App.css';
import DataFetching from './components-useEffect/DataFetching';
//import HookMouse from './components-useEffect/HookMouse';
//import MouseContainer from './components-useEffect/MouseContainer';
// import ClassCounterOne from './components-useEffect/ClassCounterOne';
//import HookCounterOne from './components-useEffect/HookCounterOne';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter>
      <HookCounterTwo></HookCounterTwo>
      <br />
      <HookCounterThree></HookCounterThree> */}
      {/* -----------------------useEffect part----------------------------- */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <HookCounterOne></HookCounterOne> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer/> */}
      {/* ************************************---Fetching data with hooks-----****************************************************** */}
      <DataFetching></DataFetching>
    </div>
  );
}

export default App;
