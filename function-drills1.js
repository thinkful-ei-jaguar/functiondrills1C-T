function getYearOfBirth (age) {
    if (age < 0) {
        throw new Error ("Age can not be negative");
    } // this throw statement should be in createGreeting //
    else {
        return yearOfBirth;
    } //should return the calculation of year - age parameter//
}

function createGreeting (name, age) {
    const yearOfBirth = 2019 - age;
    if (name == 'undefined' && age == 'undefined')
    // name and age used || statement, undefined doesn't have quotes around it. //  
    {
        throw new Error ("Arguments not valid");
    }
    else if (age !== NaN && name != string) {
        throw new Error ("Age is not an number or name is not a string");
    }
    else {
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearofBirth}.`;
    }
} // make const variable first 1 function to use it in this function, then return template literal//

try {
    const greeting1 = createGreeting(Joe, -50); 
    //add console.log of const variable//
} catch(e) {
    console.log("Age can not be negative");
    //e.message//
}

const greeting1 = createGreeting();
console.log(greeting1);