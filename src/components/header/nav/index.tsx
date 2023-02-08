import { NavLink } from 'react-router-dom'
import data from '../../../data.json'

const NavHeader = () => {
  const categories = data.category.sort((a, b) => a.id - b.id)
  return (
    <div className='category'>
      <ul>
        {categories.map(({ id, name }) => (
          <li className='nav-link' key={id}>
            <NavLink to={id.toString()}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavHeader
