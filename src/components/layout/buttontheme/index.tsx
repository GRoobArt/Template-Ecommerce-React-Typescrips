import { HiMoon, HiSun } from 'react-icons/hi2'
import useChange from '../../../hook/usechange'

const ButtonTheme = () => {
  const [icons, changetIcons] = useChange(<HiSun />, <HiMoon />)
  const [theme, changetTheme] = useChange('light', 'dark')

  return (
    <div className='theme-select'>
      <button
        className={`action-icons theme ${theme}`}
        onClick={() => {
          changetIcons()
          changetTheme()
        }}>
        {icons}
      </button>
    </div>
  )
}

export default ButtonTheme
