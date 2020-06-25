function challengeBanner (n) {
    console.log("##### Challenge " + n + " #####")
}

challengeBanner(1);
function challenge1 () {
    let num = 1;
    while (num <= 5) {
        console.log(num);
        num = num + 1;
    }
}
challenge1();

challengeBanner(2);
function challenge2 (n) {
let num = 1;
while (num <= n) {
console.log(num)
num++;
}
}
challenge2(6);


challengeBanner(3);
function challenge3(numOne, numTwo) {
    while (numOne <= numTwo) {
        console.log(numOne);
        numOne++;
       
    }
}
challenge3(3, 10)

challengeBanner(4);
function challenge4 (number) {
    let count = 1;
    while (count <= number ) {
        if (count % 2 === 0) {
            console.log(count + " even")
        } else if (count % 2 === 1) {
            console.log(count + "  odd")
            
        }
        count++
    }
}
challenge4(5);

challengeBanner(5);
function descending () {
    let num = 10
    while (num > 0) {
        console.log(num--);
    } 
}
descending();

challengeBanner(6);
function blastOff() {
    let num = 10;
    while (num > 0) {
        console.log(num--)
    }
    console.log("Blast Off!")
}
blastOff();

challengeBanner(7);
function inThrees (number) {
    while (number >= 1) {
        console.log(number);
        number = number - 3;
    }
}
inThrees(20);

challengeBanner(8);
function greeting () {
    let num = 1;
    let message = "Hello!!!";
    while (num <= 7) {
        console.log(num + ". " + message);
        num++;
    }
}
greeting();

challengeBanner(9);
function sayWhat (str) {
    let num = 1;
    while (num <= 7) {
        console.log(num + "." + str);
        num++;
    }
}
sayWhat("How's it going?");

challengeBanner(10);
function multiWord (str, count) {
    let num = 1;
    while (num <= count) {
        console.log(str);
        num = num + 1;
    }
    }
multiWord("goodbye", 6)

challengeBanner(11);
function everyCharacter (str) {
    let i = 0;
    while (i < str.length) {
        console.log(str[i]);
        i++;
    }
}
everyCharacter("think");

challengeBanner(12);
function printEven (end){
    let num = 2;
    while (num <= end) {
        console.log(num);
        num = num + 2;
        }
    }
printEven(11);

challengeBanner(13);
function everyOther (str) {
    let i = 1;
    while ( i < str.length) {
        console.log(str[i])
        i = i + 2;
    }
}
everyOther("nobody");

challengeBanner(14);
function reverseOrder (str) {
    let i = str.length - 1;
    while (i >= 0) {
        console.log(str[i]);
        i--;
    }
}
reverseOrder("dallas");

challengeBanner(15);
function fizzBuzz (n) {
    let num = 1;
    while (num <= n) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz")
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(num);
        }
        num++
    }
}
fizzBuzz(15)

challengeBanner(16);
function fibonacci (end) {
    let current = 1;
    let previous = 1;
    console.log(current)
    while (current <= end) {
        console.log(current);
        const temp = current;
        current = current + previous;
        previous = temp;
    }
}
fibonacci(21);
