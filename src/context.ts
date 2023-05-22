import React from 'react'

export const context = React.createContext<{
  currentRoute: TRoutes[]
  dispatchRoute: React.Dispatch<TRoutes[]>
} | null>(null)
