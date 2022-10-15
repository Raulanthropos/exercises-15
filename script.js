/*        JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

        DOM EXERCISES

        31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list*/

//1
const x = "John";
const y = "Doe";
console.log(x + " " + "<>" + " " + y);

//2
const vanity = {
  name: "Vanessa",
  surname: "Vanessenburg",
  email: "vvanesse@gmail.com",
};

console.log(vanity);

//3
delete vanity.email;
console.log(vanity);

//4
const arrayOfStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(arrayOfStrings);

//5
for (let stringy of arrayOfStrings) {
  console.log(stringy);
}

//6
const arrayOfNumbers = [];
for (let i = 0; i < 100; i++) {
  const randomizedNumbers = Math.floor(Math.random() * 100);
  arrayOfNumbers.push(randomizedNumbers);
}

console.log(arrayOfNumbers);

//7
const getMax = function () {
  let maxNum = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maxNum) {
      maxNum = arrayOfNumbers[i];
    }
  }
  console.log(maxNum);
};

getMax();

const getMin = function () {
  let minNum = arrayOfNumbers[0];
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < minNum) {
      minNum = arrayOfNumbers[i];
    }
  }
  console.log(minNum);
};

getMin();

//8

let arrayOfArrays = Array(4)
  .fill()
  .map(() =>
    Array(10)
      .fill()
      .map(() => Math.floor(Math.random() * 10))
  );

console.log(arrayOfArrays);

//9

const arrayAlpha = [1, 2, 3, 4];
const arrayBeta = [5, 6, 7];
const longestArray =
  arrayAlpha.length > arrayBeta.length ? arrayAlpha : arrayBeta;
console.log(longestArray);

let sumAlpha = 0;
for (let i = 0; i < arrayAlpha.length; i++) {
  sumAlpha += arrayAlpha[i];
}

let sumBeta = 0;
for (let i = 0; i < arrayBeta.length; i++) {
  sumBeta += arrayBeta[i];
}

const largestSum = sumAlpha > sumBeta ? sumAlpha : sumBeta;

console.log(largestSum);

/* DOM EXERCISES

        31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list*/

//11
const container = document.getElementById("container");
//12
const tableData = document.querySelectorAll("td");
//13
for (let index = 0; index < tableData.length; index++) {
  const element = tableData[index].innerText;
  console.log(element);
}

//14
const headingOne = document.querySelector("h1");
headingOne.innerText = "New h1";
//15
const parentTable = document.querySelector("tbody");
const newRow = document.createElement("tr");
parentTable.appendChild(newRow);
console.log(parentTable);
//16
const tableRows = document.querySelectorAll("tr");
for (let index = 0; index < tableRows.length; index++) {
  const elementRow = tableRows[index];
  elementRow.classList.add("test");
  console.log(elementRow.classList);
}
//17
const everyLink = document.querySelectorAll("a");
for (let index = 0; index < everyLink.length; index++) {
  const elementLink = tableRows[index];
  elementLink.style.background = "red";
}
//18
window.onload = function () {
  console.log("Page loaded");
};
//19
const addNewItems = function () {
  const unorderedList = document.querySelector("ul");
  const newListItem = document.createElement("li");
  unorderedList.appendChild(newListItem);
};
//20
let unorderedList = document.querySelector("ul");
const emptyList = function () {
  while (unorderedList.length > 0) unorderedList.pop();
};
console.log(unorderedList);

/* EXTRA EXERCISES

        41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
        42) Create a button that will hide every image on the page when clicked
        43) Create a button that will hide or show the table on the page when clicked
        44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
        45) Delete the last letter from the heading each time the user clicks on it
        46) Change the background color of a <td> if the user clicks on it
        47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
        48) Add automatically a pink border to a cell when the mouse hovers it
        49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
        50) Write a function to remove the last table from the page*/
