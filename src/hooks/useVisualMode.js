import { useState } from "react"


export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(item, replace = false) {
    setMode(item)
    if (replace === true) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), item])
    }
    else {
      setHistory(prev => [...prev, item])
    }
  }

  function back() {
    if (history.length === 1) {
      return
    }

    history.pop()

    setMode(history[history.length - 1])
  }
  return { mode, transition, back };
}



