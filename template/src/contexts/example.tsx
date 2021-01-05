import React, { createContext, useContext, useState } from 'react'

type ExampleContextProps = {
  example: boolean
  setExample: (state: boolean) => void
}

const ExampleContext = createContext({} as ExampleContextProps)

const ExampleProvider: React.FC = ({ children }) => {
  const [example, setExample] = useState<boolean>(false)

  return (
    <ExampleContext.Provider value={{ example, setExample }}>
      {children}
    </ExampleContext.Provider>
  )
}

export function useExample(): ExampleContextProps {
  const context = useContext(ExampleContext)

  if (!context) {
    throw new Error(`useExample should be used within an AuthProvider!`)
  }

  return context
}

export default ExampleProvider
