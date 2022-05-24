//1
//https://edabit.com/challenge/3LpBLgNRyaHMvNb4j

function addition(a, b) {
  var s = a + b;
  return s;
}

//2
//https://edabit.com/challenge/8q54MKnRrm89pSLmW

function convert(minutes) {
  var m = minutes * 60;
  return m;
}

//3
//https://edabit.com/challenge/NAQhEoxbofPidLxm9

function addition(num) {
  var s = num + 1;
  return s;
}

//4
//https://edabit.com/challenge/QaApgtePE6QrCZ64o

function getFirstValue(arr) {
  return arr[0];
}

//5
//https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk

function remainder(x, y) {
  var r = x % y;
  return r;
}

//6
//https://edabit.com/challenge/8Qg78sf5SNDEANKti

function animals(chickens, cows, pigs) {
  var s = chickens * 2 + cows * 4 + pigs * 4;
  return s;
}

//7
//https://edabit.com/challenge/iBQYbSHZGhpktLRdn

function divisibleByFive(n) {
  if (n % 5 == 0) return true;
  else return false;
}

//8
//https://edabit.com/challenge/yHGowWucg3k2kJdZ4

function comp(str1, str2) {
  var s = str1.length;
  var p = str2.length;
  if (s == p) return true;
  else return false;
}

//9
//https://edabit.com/challenge/kLa2w7m4h849k8rmW

function sayHelloBye(name, num) {
  if (num === 1) return "Hello " + name.charAt(0).toUpperCase() + name.slice(1);
  else if (num === 0)
    return "Bye " + name.charAt(0).toUpperCase() + name.slice(1);
}
