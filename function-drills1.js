function getYearOfBirth (age) {
    return yearOfBirth;
}

function createGreeting (name, age) {
    const yearOfBirth = 2019 - age;
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearofBirth}.`;
}

const greeting1 = createGreeting();
console.log(greeting1);