import banner_fren_1 from '../images/banniere/banniere-1.svg'
import banner_fren_2 from '../images/banniere/banniere-2.svg'
import banner_fren_3 from '../images/banniere/banniere-3.svg'
import banner_fren_4 from '../images/banniere/banniere-4.svg'
import banner_ja_1 from '../images/banniere-ja/banniere-ja-1.svg'
import banner_ja_2 from '../images/banniere-ja/banniere-ja-2.svg'
import banner_ja_3 from '../images/banniere-ja/banniere-ja-3.svg'
import banner_ja_4 from '../images/banniere-ja/banniere-ja-4.svg'
import banner_zh_1 from '../images/banniere-zh/banniere-zh-1.svg'
import banner_zh_2 from '../images/banniere-zh/banniere-zh-2.svg'
import banner_zh_3 from '../images/banniere-zh/banniere-zh-3.svg'
import banner_zh_4 from '../images/banniere-zh/banniere-zh-4.svg'




export default function get_banner_from_width(language) {
    const windowWidth = window.innerWidth;

    var banner_1
    var banner_2
    var banner_3
    var banner_4

    switch (language) {
        case 'fr':
            banner_1 = banner_fren_1
            banner_2 = banner_fren_2
            banner_3 = banner_fren_3
            banner_4 = banner_fren_4
            break;
        case 'en':
            banner_1 = banner_fren_1
            banner_2 = banner_fren_2
            banner_3 = banner_fren_3
            banner_4 = banner_fren_4
            break;
        case 'ja':
            banner_1 = banner_ja_1
            banner_2 = banner_ja_2
            banner_3 = banner_ja_3
            banner_4 = banner_ja_4
            break;
        case 'zh':
            banner_1 = banner_zh_1
            banner_2 = banner_zh_2
            banner_3 = banner_zh_3
            banner_4 = banner_zh_4
            break;
        default:
            banner_1 = banner_fren_1
            banner_2 = banner_fren_2
            banner_3 = banner_fren_3
            banner_4 = banner_fren_4
            break;
    }



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