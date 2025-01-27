import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">
          Amanah Toko
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link text-white">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/products" className="nav-link text-white">
                Barang
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/categories" className="nav-link text-white">
                Kategori
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/sales" className="nav-link text-white">
                Penjualan
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/purchases" className="nav-link text-white">
                Pembelian
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/suppliers" className="nav-link text-white">
                Supplier
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink to="/transfers" className="nav-link text-white">
                Transfers
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
