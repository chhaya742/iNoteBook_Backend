import { useState } from "react";

const ToggleMode=()=>{
    const [showText,setShowText]=useState(false);
return(
    <div>
       <h1> nikhil</h1>
       <button onClick={()=>setShowText(!showText)}>Show Text</button>
       {
        showText &&
       <div>
       <p>In real life, a car is an object. A car has properties like weight and color,
         and methodslike start and stop: All cars have the same properties, but the property
          valuesdiffer from car to car. All cars have the same methods, but the methods are 
          performed at different times.</p>
          <button onClick={()=>setShowText(false)}>hide text</button>
       </div>
}
    </div>
)
}

export default ToggleMode;