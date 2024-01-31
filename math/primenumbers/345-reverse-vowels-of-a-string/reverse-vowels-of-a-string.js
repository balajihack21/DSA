/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let str = s.split('');
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        while (i < j && !vowels.has(str[i].toLowerCase())) {
            i++;
        }

        while (i < j && !vowels.has(str[j].toLowerCase())) {
            j--;
        }

        // Swap vowels
        [str[i], str[j]] = [str[j], str[i]];

        i++;
        j--;
    }

    return str.join('');

};