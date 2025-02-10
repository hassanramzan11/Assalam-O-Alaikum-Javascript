//Javascript Playlist (Namastay Javascript):
// Topic we covered in Day 5

//Map Method

const arr=[1,3,5,7,9];

function double(arr){
    return arr*2;
}
function triple(arr){
    return arr*3;
}

function binary(arr){
    return arr.toString(2);
}


const output=arr.map(binary);

console.log(output);



// Filter Method
function greaterThan5(value){
    return value>5;
}

const output2=arr.filter(greaterThan5);

console.log(output2);

// Reduce Method

const output3 =arr.reduce(function(accumulator,currentValue){
    if(accumulator<currentValue){
        accumulator=currentValue;
    }
    return accumulator;
},arr[0]);


console.log(output3);


// Complex Example

const users=[
    {firstName:"John", lastName:"Doe", age:26},
    {firstName:"Jane", lastName:"Doe", age:75},
    {firstName:"Jim", lastName:"Doe", age:50},
    {firstName:"Jake", lastName:"Doe", age:26}
];

const fullname= users.map(x=>x.firstName+" "+x.lastName);
console.log(fullname); 

const userage=users.filter(x=>x.age>20);

console.log(userage);


const similarAge=users.reduce(function(accumulator,currentValue){

    if(accumulator[currentValue.age])
    {
        accumulator[currentValue.age]=++accumulator[currentValue.age];
    }
    else{
        accumulator[currentValue.age]=1;
    }

    return accumulator;
},{});





// another example

const names=users.filter(x=>x.age<30).map(x=>x.firstName);
console.log(names);

const name=users.reduce(function(acc,cur){
    if(cur.age<30){
        acc.push(cur.firstName);
    }
    return acc;
},[]);

console.log(name);


