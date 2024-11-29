import "./footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SaindratexLogo from "../../../public/assets/saindra-tex.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="foot-col1">
          <img src={SaindratexLogo} alt="kalatex logo footer" />
          <p>
            Manufacturers of Export Quality Terry Towels,
            <br />
            Chaddard, Gift Item, etc.
          </p>
          <ul className="connect-social">
            <li>
              <a href="" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <XIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <WhatsAppIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="foot-col3">
          <h2>Get in Touch</h2>
          <div className="get-inTouch">
            <LocationOnIcon />
            <p>
              <a href="https://www.google.co.in/maps/place/Saindra+Textiles+(Katta+Textiles)/@17.6562705,75.9400207,817m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bc5dbc5a438f937:0x89acda883d86967a!2sSaindra+Textiles+(Katta+Textiles)!8m2!3d17.6562654!4d75.9448916!16s%2Fg%2F11fqs5fl03!3m5!1s0x3bc5dbc5a438f937:0x89acda883d86967a!8m2!3d17.6562654!4d75.9448916!16s%2Fg%2F11fqs5fl03?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                52, MIDC, Akkalkot Road, Near Prakash Tiles, Solapur - 413006
              </a>
            </p>
          </div>
          <div className="get-inTouch">
            <PhoneInTalkIcon />
            <p style={{ gap: "30px" }}>
              <a href="tel:+918421975405">+91 8421975405</a>
            </p>
          </div>
          <div className="get-inTouch">
            <PhoneInTalkIcon />
            <p style={{ gap: "30px" }}>
              <a href="tel:+919370455758">+91 9370455758</a>
            </p>
          </div>
          <div className="get-inTouch">
            <MarkEmailReadIcon />
            <p>
              <a href="mailto:saiindratextiles@gmail.com">
                saiindratextiles@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p> &copy; {currentYear} Saindra Textiles. All rights reserved.</p>
      </div>
    </>
  );
};
