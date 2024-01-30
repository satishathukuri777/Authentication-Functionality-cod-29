// Write your JS code here

import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/">
      <div>Home</div>
    </Link>
    <Link to="/about">
      <div>About</div>
    </Link>
  </div>
)
export default Header
