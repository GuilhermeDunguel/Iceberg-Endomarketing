import logo from '../../assets/logo.svg'

import './Header.scss'

export default function Header() {
  return (
    <header className='app-header'>
      <div>
        <img src={logo} alt="" />
      </div>
    </header>
  )
}
