import React, { createContext, useState } from 'react'

export const addData = createContext()
export const editdata = createContext()
export const deletedata = createContext()

const ContextProvider = ({children}) => {

    const [useradd, setuseradd] = useState("")
    const [useredit, setuseredit] = useState("")
    const [userdelete, setuserdelete] = useState("")
  return (
    <>
      <addData.Provider value={{useradd,setuseradd}}>
          <editdata.Provider value={{useredit,setuseredit}}>
            <deletedata.Provider value={{userdelete,setuserdelete}}>
            {children}
            </deletedata.Provider>
          </editdata.Provider>
      </addData.Provider>
    </>
  )
}

export default ContextProvider
