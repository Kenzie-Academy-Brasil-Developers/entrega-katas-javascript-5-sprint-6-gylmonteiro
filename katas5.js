// implemente aqui as funções de teste

// 1º Katas 
const reverseString = (name) =>{
    return nameReverse = name.split("").reverse().join("");
} 

const testeReverseString1 = () => {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testeReverseString2 = () => {
    let result = reverseString("Gyl Monteiro");
   let expected = "orietnoM lyG";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testeReverseString1();

testeReverseString2();

//2º Katas

const testReverseSentence1 = () => {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result} `)
}

const testReverseSentence2 = () => {
    let result = reverseSentence("A melhor coisa que fiz em 2021: Kenzie Academy");
    let expected = ("Academy Kenzie 2021: em fiz que coisa melhor A");
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}
 const reverseSentence = (sentence) => {
     return  sentence.split(" ").reverse().join(" ");
        
 }

 testReverseSentence1();
 testReverseSentence2();

 //3º Katas 
 const testMinimumValue1 = () => {
     let result = minimunValue([5,1,2,3,4]);
     let expected = 1;
     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
 }

 const testMinimumValue2 = () => {
    let result = minimunValue([-5,1,0,2,3,-3,4]);
    let expected = -5;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const minimunValue = (array) =>{
    const order = array.sort((a,b)=> a - b);
    return order[0];
    
}

testMinimumValue1();
testMinimumValue2();

// 4º Katas 
const testMaximumValue1 = () => {
    let result = maximumValue([50,1,5,10,-20,80,78]);
    let expected = 80;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testMaximumValue2 = () => {
    let result = maximumValue([3,50,-100,100,351,102,998,1015,10,2000]);
    let expected = 2000;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const maximumValue = (array) => {
    const order = array.sort((a,b) => a - b);
    return  order[order.length - 1];
}

testMaximumValue1();
testMaximumValue2();

//  5º Katas

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(50, 3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(20, 7);
    let expected = 6;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`);
}

const calculateRemainder = (num1, num2) => {
    return num1 % num2;
}

testCalculateRemainder1();
testCalculateRemainder2();

// 6º Katas

const testDistinctValues1 = () => {
    let result = distinctValues([1,3,5,3,7,3,1,1,5]);
    let expected = [1,3,5,7].join(" ");
    console.assert(result === expected, `esperado: ${expected} , obtido: ${result}`);
}

const testDistinctValues2 = () => {
    let result = distinctValues([1,8,8,1,2,2,4,5,7,6,6]);
    let expected = [1,8,2,4,5,7,6].join(" ");
    console.assert(result === expected, `esperado: ${expected} , obtido: ${result}`);
}

const distinctValues = (array) => {
    let newarray = [...new Set(array)];
    return newarray.join(" ");
}

testDistinctValues1();
testDistinctValues2();


//  7º Katas

const testCountValues1 = () => {
    let result = countValues([1,3,5,3,7,3,1,1,5]);
    let expected = "1(3) 3(3) 5(2) 7(1)";
    console.assert(result === expected, `esperado:${expected}, obtido: ${result}`)
}

const testCountValues2 = () => {
    let result = countValues([8,8,6,5,6,7,8,3,2,3,3,1,2]);
    let expected = "1(1) 2(2) 3(3) 5(1) 6(2) 7(1) 8(3)";
    console.assert(result === expected, `esperado:${expected}, obtido: ${result}`)
}

const countValues = (array) => {
     let newNumbers = {};
     for (let i = 0; i < array.length; i++) {
         if (newNumbers[array[i]] === undefined) {
             newNumbers[array[i]] = 1;
             
         } else {
              newNumbers[array[i]] ++;
         }
     }
     
     newArrayKeys = Object.keys(newNumbers)
     newArrayValues = Object.values(newNumbers)
     output = "";
     for (let j = 0; j < newArrayValues.length; j++){
        output += `${newArrayKeys[j]}(${newArrayValues[j]})`
        if (j !== newArrayValues.length-1) {
            output += " "
        }
     }
     return output

}

testCountValues1();
testCountValues2();

// 8º Katas
function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

const evaluateExpression = (str, obj) => {
    newArrayKeys = Object.keys(obj);
    newArrayValues = Object.values(obj)
    let acc = 0;
    let n1 = 0;
    let n2 = 0;
    let opr = ""
    //console.log(obj)
    for (let i = 0; i < str.length; i++) {
        let position = `${str[i]}`
        console.log(position)
        console.log(obj.position)
        
    }
}

//testEvaluateExpression1();