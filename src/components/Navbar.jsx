import gwIcon from "../assets/gwwhite-transparent.png"

function Navbar() {
  return (
    <nav className="nav">
      <img src={gwIcon} className="nav--img" />
      <h1 className="nav--title">Genison Wibawa</h1>
    </nav>
  )
}

export default Navbar
