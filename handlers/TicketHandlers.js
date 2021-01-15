exports.generateRandomNumbers = () => {
  //returns "x" unique random numbers from "array".....
  const genarateUniqueRandomNumbers = (array, x) => {
    var n1;
    var length = array.length;
    const arr = [...array];
    var r = [];
    for (n1 = 1; n1 <= x; ++n1) {
      var i = Math.floor(Math.random() * (length - n1));
      r.push(arr[i]);
      arr[i] = arr[length - n1];
    }
    return r;
  };
  //col1 contains element from one to 10....col2 contains element from 11 to 20 ans so on....
  let col1 = [],
    col2 = [],
    col3 = [],
    col4 = [],
    col5 = [],
    col6 = [],
    col7 = [],
    col8 = [],
    col9 = [];

  for (let i = 1; i <= 10; i++) {
    col1.push(i);
    col2.push(i + 10);
    col3.push(i + 20);
    col4.push(i + 30);
    col5.push(i + 40);
    col6.push(i + 50);
    col7.push(i + 60);
    col8.push(i + 70);
    col9.push(i + 80);
  }

  //creating colmns containing three random unique elements from all cols we created earlier
  let colm1 = [],
    colm2 = [],
    colm3 = [],
    colm4 = [],
    colm5 = [],
    colm6 = [],
    colm7 = [],
    colm8 = [],
    colm9 = [];

  colm1 = genarateUniqueRandomNumbers(col1, 3);
  colm2 = genarateUniqueRandomNumbers(col2, 3);
  colm3 = genarateUniqueRandomNumbers(col3, 3);
  colm4 = genarateUniqueRandomNumbers(col4, 3);
  colm5 = genarateUniqueRandomNumbers(col5, 3);
  colm6 = genarateUniqueRandomNumbers(col6, 3);
  colm7 = genarateUniqueRandomNumbers(col7, 3);
  colm8 = genarateUniqueRandomNumbers(col8, 3);
  colm9 = genarateUniqueRandomNumbers(col9, 3);
  let reqArr = [colm1, colm2, colm3, colm4, colm5, colm6, colm7, colm8, colm9];

  const resultArr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      resultArr.push(reqArr[j][i]);
    }
  }

  //creating rows such that 1st row contains 1st element of all colmn arrays, 2nd row contains 2nd element and so on....
  let row1 = [],
    row2 = [],
    row3 = [];

  let randomId1 = [];

  const finalResult = [row1, row2, row3];
  for (let i = 0; i < 9; i++) {
    randomId1.push(i);
    row1.push(resultArr[i]);
  }

  for (let i = 9; i < 18; i++) {
    row2.push(resultArr[i]);
  }

  for (let i = 18; i < 27; i++) {
    row3.push(resultArr[i]);
  }

  //making elements at 4 random indexes 100 to eliminate them from adding into ticket
  const r1 = genarateUniqueRandomNumbers(randomId1, 4);
  r1.forEach((n) => {
    row1[n] = 100;
  });

  const r2 = genarateUniqueRandomNumbers(randomId1, 4);
  r2.forEach((n) => {
    row2[n] = 100;
  });

  const r3 = genarateUniqueRandomNumbers(randomId1, 4);
  r3.forEach((n) => {
    row3[n] = 100;
  });

  return finalResult;
};

var set = new Set();
exports.uniqueRandomNumbers = () => {
  while (true) {
    const n = Math.floor(Math.random() * 90) + 1;
    if (!set.has(n)) {
      set.add(n);
      return n;
    }
  }
};
