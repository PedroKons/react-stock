import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
    const { pathname } = useLocation();
  return (
    <main>
      <h1>Stock Items</h1>
        <div className='tabs'>
          <Link to="/items" className={`tab ${pathname === "/items" ? "active" : ""}`} >Todos os itens</Link>
          <Link to="/items/new" className={`tab ${pathname === "/items/new" ? "active new" : ""}`} >Novo Item</Link>
      </div>
      <Outlet/>
    </main>
  )
}
