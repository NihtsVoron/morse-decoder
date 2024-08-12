const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let result ='';

    expr = expr.toLowerCase();

    for (let index = 0; index < expr.length; index++)
    {
        let element = expr[index];

        var morse_element = '';

        for (let morse_entry of Object.entries(MORSE_TABLE))
        {
            if (morse_entry[1] == element){
                morse_element=morse_entry[0];
                break;
            }
        }

        if (morse_element == '')
        {
            result = result+morse_element.padStart(10, '*');
            continue;
        }

        let morse_value ='';
        for (let i = 0; i < morse_element.length; i++) {
            let element = morse_element[i];
            if (element ='.')
                morse_value = morse_value+'10';
            if (element ='-')
                morse_value = morse_value+'11';
        }

        result = result+morse_value.padStart(10, '0');

    }

    return result;
}

module.exports = {
    decode
}