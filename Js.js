
///////// foreach ////////

//// Exercise 1 ////

// doubleValues=(arr)=>{
//     const doubleArray=[];
//     arr.forEach(element => {
//         doubleArray.push(element*2);
//     });
//     return doubleArray;
// }

// console.log(doubleValues([1,2,3,4]));

//// Exercise 2 ////

// onlyEvenValues=(arr)=>{
//     const evenArray=[];
//     arr.forEach(element => {
//         if(element%2===0)
//         {
//             evenArray.push(element);
//         }
//     });
//     return evenArray;
// }

// console.log(onlyEvenValues([1,2,3,4]));


//// Exercise 3 ////


// showFirstAndLast=(arr)=>{
//     const falArray=[];
//     arr.forEach(element => {
//         falArray.push(`${element[0]}${element[element.length-1]}`);
//     });
//     return falArray;
// }

// console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));


//// Exercise 4 ////


// addKeyAndValue=(arr,key,value)=>{
//     arr.forEach(obj => {
//         obj[key]=value;
//     });
//     return arr;
// }

// console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));


//// Exercise 5 ////

// vowelCount=(str)=>{
//     let vowel="aeuio";
//     const lowerStr=str.toLowerCase();
//     let vowelCountObj={};
//     Array.from(lowerStr).forEach(char => {
//         if(vowel.includes(char))
//         {
//             vowelCountObj[char]=(vowelCountObj[char]|| 0)+1;
//         }
//     });
//     return vowelCountObj;
// }

// console.log(vowelCount('Elie')); 
// console.log(vowelCount('I Am awesome and so are you')); 


////////// map //////////

//// Exercise 1 ////

// doubleNumbers=(arr)=>{
//     return arr.map(number=>number*2);
// }

// console.log(doubleNumbers([1,2,3]));


//// Exercise 2 ////

// stringItUp=(arr)=>{
//     return arr.map(number=>number.toString());
// }

// console.log(stringItUp([2, 5, 100]));


//// Exercise 3 ////


// capitalizeNames=(arr)=>{
//     return arr.map(string=>string[0].toUpperCase() + string.slice(1).toLowerCase());
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


//// Exercise 4 ////


// namesOnly=(arr)=>{
//     return arr.map(obj=>obj.name);
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//     ])); 


//// Exercise 5 ////


// makeStrings=(arr)=>{
//     return arr.map(obj=>` ${obj.name} ${obj.age>18?"can go to The Matrix":"is under age!!"}`);
// }


// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));  



//// Exercise 6 ////


// readyToPutInTheDOM=(arr)=>{
//     const htmlArray= arr.map(obj=> {
//     const name=`<h1>${obj.name}</h1>`;
//     const age=`<h2>${obj.age}</h2>`;
//     return name+age;
//     })
//     return htmlArray;
// }

// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));  


//// Exercise 7 ////

// doubleValues=(arr)=>{
//     return arr.map(number=>number*2);
// }

// console.log(doubleValues([1,2,3]));
// console.log(doubleValues([1,-2,-3]));


//// Exercise 8 ////

// valTimesIndex=(arr)=>{
//     return arr.map((number,index)=>number*index);
// } 

// console.log(valTimesIndex([1,2,3]));
// console.log(valTimesIndex([1,-2,-3]));



//// Exercise 9 ////


// extractKey=(arr, key)=>{
//     return arr.map(obj=>obj[key]);
// }

// console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') );

//// Exercise 10 ////

// extractFullName=(arr)=>{
//     return arr.map(obj=>`${obj.first} ${obj.last}`);
// }

// console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, 
//                              {first: 'Tim', last:"Garcia"}, 
//                              {first: 'Matt', last:"Lane"},
//                               {first: 'Colt', last:"Steele"}]));