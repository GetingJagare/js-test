const convertNumber = (num) => {
    const digits = `${num}`.padStart(4, '0').split('');
    const map = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
    const map2 = {1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen'};
    const map3 = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};

    let word = [
        +digits[0] > 0 ? `${map[digits[0]]} thousand` : '',
        +digits[1] > 0 ? `${map[digits[1]]} hundred` : '',
        ((n, num) => {
            const prefix = num > 100 ? ' and ' : '';
            switch (true) {
                case +n === 0:
                    return '';
                case +n < 10:
                    return `${prefix}${map[+n]}`;
                case +n >= 11 && +n <= 19:
                    return `${prefix}${map2[n[1]]}`;
                case +n % 10 === 0:
                    return `${prefix}${map3[n[0]]}`;
                default:
                    return `${prefix}${map3[n[0]]} - ${map[n[1]]}`;
            }
        })(digits.slice(-2).join(''), num),
    ];

    word = word.filter((s) => s).join('').replace(/\-|\s/g, '');
    return word;
}

let res = 0;
for (let n = 1; n <= 1000; n++) {
    res += convertNumber(n).length;
}

console.log(res);