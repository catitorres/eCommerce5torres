import CartWidget from "./CartWidget";

function NavBar() {
  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="javascript:void(0)">SANSE</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="javascript:void(0)">Inicio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
export default NavBar;