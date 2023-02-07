import { NavLink } from 'react-router-dom'
import data from '../../../json/info.json'

const NavHeader = () => {
  const categories = data.category
  return (
    <div className='category'>
      <ul>
        {categories.reverse().map(({ id, name }) => (
          <li className='nav-link' key={id}>
            <NavLink to={id.toString()}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavHeader
