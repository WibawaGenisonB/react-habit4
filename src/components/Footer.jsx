import youtube from "../assets/youtube.png"
import linkedin from "../assets/linkedin.png"
import whatsapp from "../assets/whatsapp.png"
import github from "../assets/github.png"

function Footer() {
  return (
    <div id="menu-outer">
      <footer class="table">
        <ul className="horizontal-list">
          <li>
            <img src={linkedin} className="footer--icon" />
          </li>
          <li>
            <img src={youtube} className="footer--icon" />
          </li>
          <li>
            <img src={whatsapp} className="footer--icon" />
          </li>
          <li>
            <img src={github} className="footer--icon" />
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
