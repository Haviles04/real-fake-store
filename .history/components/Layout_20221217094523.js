import style from '../styles/layout.module.css'

function Layout({children}) {
  return (
    <div className={style.main}>
        {children}

    </div>
  )
}

export default Layout