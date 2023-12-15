export default function removeAccents(str) {
    if (typeof(str)=== String){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    
}