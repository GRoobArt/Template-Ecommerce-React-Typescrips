import { useState } from 'react'

type changetType = string | Object

const useChange = (typeBase: changetType, changType: changetType) => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState(typeBase)

  const ClickShow = () => {
    setShow(!show)

    !show ? setType(changType) : setType(typeBase)
  }

  return [type, ClickShow]
}

export default useChange
