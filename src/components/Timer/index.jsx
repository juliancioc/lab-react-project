import React, { useEffect, useReducer } from "react"

function reducer(state, action) {
  switch (action.type) {
    case 'agent':
      return { initialValue: 0 }
    case 'customer':
      return { initialValue: 12 }
    case 'system':
      return { initialValue: 12 }
    case 'decrement_timer':
      return { initialValue: state.initialValue - 1 }
    default:
      throw Error('Unknown action')
  }
}

export const Timer = () => {
  const [timer, dispatch] = useReducer(reducer, { initialValue: 0 })

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'decrement_timer' })
    }, 60000)
  }, [timer])

  return (
    <div>
      <h1>Timer</h1>
      <h1>{timer.initialValue}</h1>
      <button onClick={() => dispatch({ type: 'agent' })}>Agent</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'customer' })}>Customer</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: 'system' })}>System</button>
    </div>
  )
}
