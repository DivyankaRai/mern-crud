import React, { createContext, useState } from 'react'

export const addData = createContext()
export const editdata = createContext()

const ContextProvider = ({children}) => {

    const [useradd, setuseradd] = useState("")
    const [useredit, setuseredit] = useState(initialState)
  return (
    <>
      <addData.Provider value={{useradd,setuseradd}}>
          <editdata.Provider value={{useredit,setuseredit}}>
            {children}
          </editdata.Provider>
      </addData.Provider>
    </>
  )
}

export default ContextProvider
