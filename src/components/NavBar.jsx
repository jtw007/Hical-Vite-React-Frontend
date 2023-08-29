import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <h2>this is navbar</h2>
      <h4><a href='/'>Home</a></h4>
      <h4><a href='/confirmation'>Confirmation</a></h4>
      <h4><a href='/create-new-activity'>Create new activity</a></h4>
    </div>

  )
}

export default NavBar