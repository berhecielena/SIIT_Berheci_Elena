//1
//https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
  var s = 0;
  for (i = 1; i <= num; i++) s = s + i;
  return s;
}

//2
//https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
  var minn = 10000;
  var maxx = -10000;
  for (var index = 0; index < arr.length; index++) {
    if (arr[index] >= maxx) maxx = arr[index];

    if (arr[index] <= minn) minn = arr[index];
  }

  return [minn, maxx];
}

//3
//https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
  var s1 = "";
  for (var i = 0; i < str.length; i++) {
    s1 += str[i] + str[i];
  }
  return s1;
}

//4
//https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

function set(arr) {
  return [...new Set(arr)];
}

//5
//https://edabit.com/challenge/hscAGyt4iNZ3PKy3g

function chatroomStatus(users) {
  if (users.length == 0) return "no one online";
  if (users.length == 1) return users[0] + " online";
  if (users.length == 2) return users[0] + " and " + users[1] + " online";

  return (
    users[0] + ", " + users[1] + " and " + (users.length - 2) + " more online"
  );
}
