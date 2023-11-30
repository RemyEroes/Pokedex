import '../css/card.css'
import fond_carte_squircle from '../images/fond-card-template-squircle.svg'
import Tilt from 'react-parallax-tilt';



export default function Card({name}){

    // console.log(name)

    return(
        <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
            <div className="card-container">
                <img className='fond-carte' src={fond_carte_squircle} alt="carte"/>
            </div>
            <div className='infos-pokemon'>
                
            </div>
        </Tilt>
    )
}