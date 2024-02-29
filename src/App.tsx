import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo"/> : null}
            {selectedView == "ListDemo1" ? <ListDemo title="List demo1"/> : null}  
            {selectedView == "EventDemo" ? <EventDemo title="Event Demo"/> : null} 
            {selectedView == "FormUncontrolled" ? <FormUncontrolled title="FormUncontrolled"/> : null}                            
            {selectedView == "StateDemo1" ? <StateDemo1 title="StateDemo1"/> : null}
            {selectedView == "StateDemo2" ? <StateDemo2 title="StateDemo2"/> : null}
            {selectedView == "StateDemo3" ? <StateDemo3 title="StateDemo3"/> : null}
            {selectedView == "UseEffect" ? <UseEffectDemo title="UseEffect"/> : null}
            {selectedView == "FetchDemo" ? <FetchDemo1 title="FetchDemo"/> : null}
            {selectedView == "LiftingState" ? <LiftingState title="LiftingState"/> : null}
            {selectedView == "ContextDemo" ? <ContextDemoApp title="ContextDemo"/> : null}


            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ListDemo1")}>
        List demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("EventDemo")}>
        Event demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FormUncontrolled")}>
        Form Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
        StateDemo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
        StateDemo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
        StateDemo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("UseEffect")}>
        UseEffect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
        FetchDemo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("LiftingState")}>
        LiftingState
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ContextDemo")}>
        ContextDemo
      </button>
    </>
  );
};
