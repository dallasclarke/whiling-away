function challengeBanner (n) {
    console.log("##### Challenge " + n + " #####")
}

challengeBanner(1);
function challenge1 () {
    let num = 1;
    while (num <= 5) {
        console.log(num);
        num = num + 1
    }
}
challenge1();

challengeBanner(2);
function challenge2 (n) {
while (n >= 1 && n <= 10) {
console.log(n)
n--;
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
function multiWord (str, num) {
    let repeatedStr = "";
    while (num > 0) {
        repeatedStr += str;
        num--;
    }
    console.log(repeatedStr);
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
