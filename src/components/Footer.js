import '../css/footer.css';

// pokeball img
import pokeball_img from '../images/pokeball.svg'


export default function Footer() {

  return (
    <div id='footer' className="footer">
      <img className="pokeball-img" src={pokeball_img} alt="pokeball" />
    </div>
  );
}



