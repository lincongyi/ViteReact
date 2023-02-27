import { generateId } from '@utils/index'
import React, { useReducer } from 'react'

type TComponentIds = {
  componentA?: string
  componentB?: string
  componentAchild?: string
}

type TContext = {
  id: TComponentIds
  dispatchId: React.Dispatch<TComponentIds>
}

const context = React.createContext<TContext | undefined>(undefined)

const componentIds: TComponentIds = {
  componentA: generateId(),
  componentB: generateId(),
  componentAchild: generateId(),
}

const Provider = ({ children }: { children: JSX.Element }) => {
  const [id, dispatchId] = useReducer(
    (state: TComponentIds, action: TComponentIds) => ({ ...state, ...action }),
    componentIds
  )
  return (
    <>
      <context.Provider value={{ id, dispatchId }}>{children}</context.Provider>
    </>
  )
}

export { context, Provider }
