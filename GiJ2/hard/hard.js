let tom = {
    height: 9, //inches
    mass: 8 //g
};

let jerry = {
    height: 10, //inches
    mass: 45 //g
}

let tomBMI = (tom.mass / (tom.height * tom.height)) * 703;
let jerryBMI = (jerry.mass / (jerry.height * jerry.height)) * 703;

let tomHigherBMI = tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`);