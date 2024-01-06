const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const summArrayElement = (firstNumb, secondNumb) => {
  let firstPosition;
  let secondPosition;
  let summ;

  if (firstNumb > 0 && secondNumb > 0) {
    if (firstNumb < array[9] || secondNumb < array[9]) {
      if (firstNumb < secondNumb) {
        if (array.includes(firstNumb) && secondNumb > 100) {
          firstPosition = array.indexOf(Math.round(firstNumb / 10) * 10);
          summ = array
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
        summ =
          firstPosition == -1 && secondPosition == -1
            ? array[0]
            : array
                .slice(
                  firstPosition != -1 ? firstPosition : firstPosition + 1,
                  secondPosition + 1
                )
                .reduce(
                  (previousValue, currentValue) => previousValue + currentValue,
                  0
                );

        return summ;
      } else return 0;
    } else return 0;
  } else return -1;
};
