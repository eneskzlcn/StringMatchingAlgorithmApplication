// this function will return an number array which are the indexes of the text where the pattern found.
export function naive_string_matching(pattern, text) // 'text' is the string that we search for given 'pattern' string.
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

export function boyer_moore_string_matching(pattern, text) {

    var pattern_found_indexes = [];
    //create table for pattern
    var table = boyer_moore_creating_bad_suffix_table(pattern);

    console.log(table);
    // loop from 0 th index to (text length - pattern length) 'th index
    let i = 0;
    while (i <= (text.length - pattern.length)) {
        let j = pattern.length - 1;

        while (j >= 0 && (pattern.charAt(j) == text.charAt(i + j)))
            j--;

        if (j < 0) // that means the inner while loop completed succesfully. so the pattern found at i index
        {
            pattern_found_indexes.push(i);
            i++;
        } else {
            var bad_match_char = text.charAt(i + j);
            var is_char_in_table = table.find(r => r.letter == bad_match_char);
            if (is_char_in_table) {
                var shift_amount = is_char_in_table.value;
                i += shift_amount;
            } else {
                i += pattern.length;
            }
        }
    }
    return pattern_found_indexes;
}
//this functions find the bad suffix value for each character in pattern by the bad suffix table formula
export function boyer_moore_creating_bad_suffix_table(pattern) {
    var table = []; // en empty table. this table will contain objects in this type ex : {letter: 'A', value: 5}

    for (let i = 0; i < pattern.length; i++) { // loop to reach every char in pattern string
        let letter = pattern.charAt(i); // char at ith index
        let value = Math.max(1, (pattern.length - i - 1)); // this is the bad suffix table formula  val = max(1,(len-index-1))

        let is_letter_added = table.find(r => r.letter == letter); //if the letter already in array do not push the same letter again. Just update the older objects 'value' with new found value
        if (is_letter_added) is_letter_added.value = value;
        else table.push({
            "letter": letter,
            "value": value
        });
    }

    return table;
    //console.log(table);
}