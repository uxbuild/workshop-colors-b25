// Write your Color component here

// example: params object dot notation
// const Color = (props) => {
//   return <div className={}></div>;
// };

import { useState } from "react";



//example: params object destructuring
const Color = ({color, setSelectedColor}) => {
  return (
    <div
      className={color}
      onClick={() => {
        setSelectedColor(color);
      }}
    ></div>
  );
};

const App = () => {
  
// add getter-setter useState hook / property + method.
const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color={selectedColor === "red"? "red selected": "red"} setSelectedColor={setSelectedColor} />
        <Color color={selectedColor === "green"? "green selected": "green"} setSelectedColor={setSelectedColor} />
        <Color color={selectedColor === "blue"? "blue selected": "blue"} setSelectedColor={setSelectedColor} />
        
      </div>
    </div>
  );
};

export default App;
