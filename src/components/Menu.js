import '../css/menu.css'
import pokeball_image from'../images/pokeball.svg'
// import banniere from'../images/banniere.svg'

export default function Menu(){
    return(
        <div className="menu">
            <img className='pokeball-logo' src={pokeball_image} alt="pokeball"/  >
        </div>
    )
}
//<img className='banniere' src={banniere} alt="banniere"/  >