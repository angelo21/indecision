import React from "react";

import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      {props.option.length !== 0 && <button onClick={props.handleDeleteOptions}>Remove All</button>}
      {props.option.length === 0 && <p>Please add an option to get started</p>}
      {
        props.option.map((option) => {
          return (
            <Option 
              key={option} 
              optionText={option}
              handleDeleteOptionSingular={props.handleDeleteOptionSingular}
            />
          )
        })
      }
    </div>
  )
}

export default Options;