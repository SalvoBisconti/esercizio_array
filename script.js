const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const toNumber2 = (firstNumb, secondNumb) => {
  let firstPosition;
  let secondPosition;

  if (firstNumb > 0 && secondNumb > 0) {
    if (firstNumb < array[9] || secondNumb < array[9]) {
      if (firstNumb < secondNumb) {
        if (array.includes(firstNumb) && secondNumb > 100) {
          firstPosition = array.indexOf(Math.round(firstNumb / 10) * 10);
          const summ = array
            .slice(firstPosition, 10)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            );
          return summ;
        }
        firstPosition = array.indexOf(
          firstNumb > array[0]
            ? Math.round(firstNumb / 10) * 10
            : Math.floor(firstNumb / 10) * 10
        );
        secondPosition = array.indexOf(
          secondNumb > array[0]
            ? Math.round(secondNumb / 10) * 10
            : Math.floor(secondNumb / 10) * 10
        );
        const summ =
          firstPosition == -1
            ? array[0]
            : array
                .slice(firstPosition, secondPosition + 1)
                .reduce(
                  (previousValue, currentValue) => previousValue + currentValue,
                  0
                );

        return summ;
      } else return 0;
    } else return 0;
  } else return -1;
};

console.log(toNumber2(-2, -10));
console.log(toNumber2(-2, 10));
console.log(toNumber2(90, 20));
console.log(toNumber2(3, 10));
console.log(toNumber2(91, 99));
console.log(toNumber2(90, 120));
console.log(toNumber2(70, 150));
console.log(toNumber2(120, 150));
