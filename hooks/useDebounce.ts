import { useEffect, useState } from 'react'

const useDebounce = <T = any>(value: T, delay = 600) => {
  const [debouncedState, setDebouncedState] = useState<T>(() => value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedState(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedState
}

export default useDebounce
