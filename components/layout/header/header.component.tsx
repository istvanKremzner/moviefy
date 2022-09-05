import Link from 'next/link'
import { navItems } from './nav-items.constant'
import headerStyles from './header.module.css'
import { HomeIcon } from '../../icons'

export const Header = () => {

  return (
    <nav className={headerStyles.header}>
      <Link href='/'><HomeIcon /></Link>
      {navItems.map(element => <Link href={element.route} key={element.name} ><a className={headerStyles.myLink}>{element.name}</a></Link>)}
    </nav>
  )
}
