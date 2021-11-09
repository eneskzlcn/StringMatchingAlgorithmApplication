// this function will return an number array which are the indexes of the text where the pattern found.
function naive_string_matching(pattern, text) // 'text' is the string that we search for given 'pattern' string.
{
    //the time complexity of naive string matching algorithm is  O( m * (n - m + 1)) where n is the text length and m is the pattern length 

    //we need to find the length of pattern and text firstly. 
    //This variables for just for understanding and reading clearly. String in js have a length property simply.
    //You do not need to declare them in your code.
    var text_length = text.length;
    var pattern_length = pattern.length;

    let pattern_found_indexes = [];
    //we need to loop from 0th index of text to the ( text_length - pattern_length)th index. This is the last index can pattern start from.
    let last_possible_patern_index = (text_length - pattern_length);
    let matched_character_count;

    for (let i = 0; i <= last_possible_patern_index; i++) {
        matched_character_count = 0;
        for (let j = 0; j < pattern_length; j++) {
            if (text.charAt(i + j) != pattern.charAt(j)) break; //if any mismatch directly break.
            matched_character_count++;
        }
        if (matched_character_count == pattern_length) // if there is no break in upper loop that means fullmatch. So push it.
            pattern_found_indexes.push(i);
    }
    return pattern_found_indexes;
}