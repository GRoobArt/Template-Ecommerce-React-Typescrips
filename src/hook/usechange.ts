import { useState } from 'react'

const useChange = (typeBase: string, changType: string) => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState(typeBase)

  const ClickShow = () => {
    setShow(!show)

    !show ? setType(changType) : setType(typeBase)
  }

  return [type, ClickShow]
}

export default useChange
