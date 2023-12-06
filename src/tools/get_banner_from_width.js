import banner_1 from '../images/banniere/banniere-1.svg'
import banner_2 from '../images/banniere/banniere-2.svg'
import banner_3 from '../images/banniere/banniere-3.svg'
import banner_4 from '../images/banniere/banniere-4.svg'



export default function get_banner_from_width() {
    const windowWidth = window.innerWidth;
    
    if (windowWidth < 768) {
        return banner_1;
    } else if (windowWidth < 1024) {
        return banner_2;
    } else if (windowWidth < 1300) {
        return banner_3;
    } else {
        return banner_4;
    }
}