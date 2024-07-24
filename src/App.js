import './App.css';
import React from 'react'
//import ParentComponent from './useCallback/ParentComponent';
//import Counter from './useMemo/Counter';
//import FocusInput from './useRef/FocusInput';
import HookTimer from './useRef/HookTimer';
//import CounterOne from './useReducer/CounterOne';
//import CounterTwo from './useReducer/CounterTwo';
//import DataFetching from './useReducer/DataFetching';
//import DataFetching from './components-useEffect/DataFetching';
//import ComponentC from './useContext/ComponentC';
//import HookMouse from './components-useEffect/HookMouse';
//import MouseContainer from './components-useEffect/MouseContainer';
// import ClassCounterOne from './components-useEffect/ClassCounterOne';
//import HookCounterOne from './components-useEffect/HookCounterOne';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
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
      {/* <DataFetching></DataFetching> */}

      {/* ================================================Use Context =========================================================*/}
      {/* <UserContext.Provider value={'Roshni'}>
         <ChannelContext.Provider value={'roshni hooks'}>
              <ComponentC></ComponentC>
         </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* ...............................................UseReducer.................................... */}
      {/* <CounterOne></CounterOne> */}
      {/* <CounterTwo></CounterTwo> */}

       {/* <DataFetching></DataFetching> */}

       {/* --------------------------useCallBack------------------------------------ */}
       {/* <ParentComponent></ParentComponent> */}

       {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@------------useMemo-------------@@@@@@@@@@@@@@@@@@@@@@ */}
       {/* <Counter></Counter> */}
       {/* -----------------useRef---------------- */}
       {/* <FocusInput></FocusInput> */}
       <HookTimer></HookTimer>

    </div>
  );
}

export default App;
