import youtube from "../assets/youtube.png"
import linkedin from "../assets/linkedin.png"
import whatsapp from "../assets/whatsapp.png"
import github from "../assets/github.png"

function Footer() {
  return (
    <footer>
      <img src={linkedin} className="footer--icon" />
      <img src={youtube} className="footer--icon" />
      <img src={whatsapp} className="footer--icon" />
      <img src={github} className="footer--icon" />
    </footer>
  )
}

export default Footer
