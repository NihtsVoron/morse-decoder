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

    for (let index = 0; index < expr.length; index=index+10)
    {
        let element = expr.substr(index,10);

        if (element =='**********')
            result = result +' ';

        let indexOfFirst = element.indexOf('1');
        let morse_element = element.substr(indexOfFirst, 10 - indexOfFirst);

        let morse_value='';
        for (let i = 0; i < morse_element.length; i=i+2) {
            let element_morse = morse_element.substr(i, 2);

            if (element_morse=='10')
            {
                morse_value=morse_value+'.';
                continue;
            }

            if (element_morse=='11')
            {
                morse_value=morse_value+'-';
                continue;
            }
        }

        for (let morse_entry of Object.entries(MORSE_TABLE))
        {
            if (morse_entry[0] == morse_value){
                result=result+morse_entry[1];
                break;
            }
        }
    }

    return result;
}

module.exports = {
    decode
}