function getYearOfBirth (age) {
    if (age < 0) {
        throw new Error ("Age can not be negative");
    }
    else {
        return yearOfBirth;
    }
}

function createGreeting (name, age) {
    const yearOfBirth = 2019 - age;
    if (name == 'undefined' && age == 'undefined') {
        throw new Error ("Arguments not valid");
    }
    else if (age !== NaN && name != string) {
        throw new Error ("Age is not an number or name is not a string");
    }
    else {
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearofBirth}.`;
    }
}

try {
    const greeting1 = createGreeting(Joe, -50); 
} catch(e) {
    console.log("Age can not be negative");
}

const greeting1 = createGreeting();
console.log(greeting1);