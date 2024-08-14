import Header from './header/index.tsx'
import {GlobalStyle} from './theme/globalStyle'
import 'animate.css'

function Layout({children}) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
