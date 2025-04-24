import "./Header.css";
import LogoDragonBall from "../../assets/logo2.png";

const Header = () => {
  return (
    <header>
      <img src={LogoDragonBall} alt="Logo Dragon Ball Z" className="logo" />
      <h1>API PERSONAJES</h1>

    </header>
  )
}

export default Header