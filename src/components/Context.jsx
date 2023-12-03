import React, { useState } from 'react'
import { createContext } from 'react'

export const titleContext = createContext();

const ContextProvider = (props) => {
    const [title, setTitle] = useState("Counting");

    const changeTitle = () => {
        let add = "Counting" + Math.ceil(Math.random(0,1)*1000);
        setTitle(add);
    }

    const data = {title, changeTitle};

  return (
    <titleContext.Provider value={data}>
      {props.children}
    </titleContext.Provider>
  )
}

export default ContextProvider
