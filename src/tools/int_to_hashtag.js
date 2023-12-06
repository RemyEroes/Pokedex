export default function int_to_hashtag(int) {
    var tostring = int.toString();
    var finalstring;

    if (tostring.length === 3) {
        finalstring = "#0" + int;
    } else if (tostring.length === 2) {
        finalstring = "#00" + int;
    } else if (tostring.length === 1) {
        finalstring = "#000" + int;
    } else {
        finalstring = "#" + int;
    }

    return finalstring;
}