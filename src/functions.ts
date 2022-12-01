export default {
  FormatNumber: (num: string|number|undefined) => {
    num = (num?.toString() ?? '');
    let outNumber = '';

    if (num.length > 3 && num.length < 9) {
      outNumber = num.slice(0, 4).concat('-', num.slice(4, num.length));
    } else if (num.length === 9) {
      outNumber = num.slice(0, 1).concat(' ', num.slice(1, 5), '-', num.slice(5, num.length));
    } else if (num.length > 9 && num.length < 12) {
      outNumber = '('.concat(num.slice(0, 2), ') ', num.slice(2, 3), ' ', num.slice(3, 7), '-', num.slice(7, 11));
    }

    return outNumber;
  }
};
