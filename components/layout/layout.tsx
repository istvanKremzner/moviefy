import { FC } from 'react'
import { Header } from './header'

interface ILayoutProps {
  children: React.ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}
