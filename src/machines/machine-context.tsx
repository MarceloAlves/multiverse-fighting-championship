import React from 'react'
import { MachineContext, MachineEvents } from './main'

const MachineStateContext = React.createContext({} as MachineContext)
const MachineSendContext = React.createContext((event: MachineEvents) => {})

const MachineProvider: React.FC<{ value: MachineContext; send: any }> = ({ children, value, send }) => {
  return (
    <MachineStateContext.Provider value={value}>
      <MachineSendContext.Provider value={send}>{children}</MachineSendContext.Provider>
    </MachineStateContext.Provider>
  )
}

const useMachineContext = () => {
  const context = React.useContext(MachineStateContext)

  if (context === undefined) {
    throw new Error('useMachineContext must be used within a MachineProvider')
  }

  return context
}

const useMachineSend = () => {
  const context = React.useContext(MachineSendContext)

  if (context === undefined) {
    throw new Error('useMachineSend must be used within a MachineProvider')
  }

  return context
}

export { MachineProvider, useMachineContext, useMachineSend }
