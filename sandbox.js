function Factorial() {
  const dictionary = {};

  const fact = (arg) => {
    if (arg < 2) {
      return 1;
    }

    return arg * fact(arg - 1);
  };

  return (arg) => {
    if (!(arg in dictionary)) {
      dictionary[arg] = fact(arg);
    }

    return dictionary[arg];
  };
}

function Combination() {
  const dictionary = {};
  const factorial = Factorial();

  const comb = (arg1, arg2) => {
    return factorial(arg1) / factorial(arg2) / factorial(arg1 - arg2);
  };

  return (arg1, arg2) => {
    if (!(`${arg1}_${arg2}` in dictionary)) {
      dictionary[`${arg1}_${arg2}`] = `${arg1}_${arg1 - arg2}` in dictionary
        ? dictionary[`${arg1}_${arg1 - arg2}`]
        : comb(arg1, arg2);
    }

    return dictionary[`${arg1}_${arg2}`];
  };
}


function getRow(rowIndex) {
  const combination = Combination();
  return Array(rowIndex + 1)
    .fill(0)
    .map((_el, i) => combination(rowIndex, i));
}


console.log(
  getRow(13)
)
