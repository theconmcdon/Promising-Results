//    slowMath.add(6, 2).then(result => {
//        console.log(result);
//        return slowMath.multiply(result, 2);
//    }).then(result => {
//        console.log(result);
//        return slowMath.divide(result, 4);
//    }).then(result => {
//        console.log(result);
//        return slowMath.subtract(result, 3);
//    }).then(result => {
//        console.log(result);
//        return slowMath.add(result, 98);
//    }).then(result => {
//       console.log(result);
//       return slowMath.remainder(result, 2);
//    }).then(result => {
//       console.log(result);
//       return slowMath.multiply(result, 50);
//    }).then(result => {
//       console.log(result);
//       return slowMath.remainder(result, 40);
//    }).then(result => {
//       console.log(result);
//       return slowMath.add(result, 32);
//    }).then(result => {
//       console.log(`The final result is ${result}`);
//    }).catch(error => {
//       console.log(error);
//    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let container = document.createElement('div');
container.style.padding = '10px';
container.style.width = '420px';
container.style.height = '180px';
container.style.border = '1px black solid';
container.style.borderRadius = '2px';
document.body.appendChild(container);
//---------------------------------------------------------//
let input1 = document.createElement('input');
container.appendChild(input1);
input1.placeholder = 'Value 1';
input1.style.marginBottom = '5px';
//---------------------------------------------------------//
let input2 = document.createElement('input');
container.appendChild(input2);
input2.placeholder = 'Value 2';
input2.style.marginLeft = '4px';
input2.style.marginRight = '4px';
//---------------------------------------------------------//
let button = document.createElement('button');
button.textContent = 'Do Math!';
container.appendChild(button);
//---------------------------------------------------------//
button.addEventListener('click', () => {
    div9.style.fontWeight = 'normal';
    val1 = input1.value;
    val2 = input2.value;
    if (input1.value > 0 || input2.value > 0) {
        for (i = 0; i < divArray.length; i++) {
            divArray[i].textContent = '';
        };
        doMath(val1, val2);
    } else {
        alert('Error: Please input two positive values.')
    };
});
//---------------------------------------------------------//
let div1 = document.createElement('div');
container.appendChild(div1);
let div2 = document.createElement('div');
container.appendChild(div2);
let div3 = document.createElement('div');
container.appendChild(div3);
let div4 = document.createElement('div');
container.appendChild(div4);
let div5 = document.createElement('div');
container.appendChild(div5);
let div6 = document.createElement('div');
container.appendChild(div6);
let div7 = document.createElement('div');
container.appendChild(div7);
let div8 = document.createElement('div');
container.appendChild(div8);
let div9 = document.createElement('div');
container.appendChild(div9);
let count = 1;
//---------------------------------------------------------//
let divArray = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
for (i = 0; i < divArray.length; i++) {
    divArray[i].value = 0;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function doMath(val1, val2) {
    try {
        div1.textContent = `Adding ${val1} and ${val2}` ;
        let result = await slowMath.add(val1, val2);
        div1.textContent = result;
        div1.value = count;
        //---------------------------------------------------------------------------------------//
        div2.textContent = `Multiplying ${result} and 2`;
        result = await slowMath.multiply(result, 2);
        div2.textContent = result;
        div2.value = count;
        //---------------------------------------------------------------------------------------//        
        div3.textContent = `Dividing ${result} and 4`;
        result = await slowMath.divide(result, 4);
        div3.textContent = result;
        div3.value = count;
        //---------------------------------------------------------------------------------------//        
        div4.textContent = `Subtracting ${result} and 3`;
        result = await slowMath.subtract(result, 3);
        div4.textContent = result;
        div4.value = count;
        //--------------------------------------------------------------------------------------//        
        div5.textContent = `Adding ${result} and 98`;
        result = await slowMath.add(result, 98);
        div5.textContent = result;
        div5.value = count;
        //---------------------------------------------------------------------------------------//        
        div6.textContent = `Modulating ${result} and 2`;
        result = await slowMath.remainder(result, 2);
        div6.textContent = result;
        div6.value = count;
        //---------------------------------------------------------------------------------------//        
        div7.textContent = `Multiplying ${result} and 50`;
        result = await slowMath.multiply(result, 50);
        div7.textContent = result;
        div7.value = count;
        //---------------------------------------------------------------------------------------//        
        div8.textContent = `Modulating ${result} and 40`;
        result = await slowMath.remainder(result, 40);
        div8.textContent = result;
        div8.value = count;
        //---------------------------------------------------------------------------------------//        
        div9.textContent = `Adding ${result} and 32`;
        result = await slowMath.add(result, 32);
        div9.style.fontWeight = 'bold';
        div9.textContent = `The final result of successful operation #${count} is ${result}.`;
        div9.value = count;
        count++;
    //-------------------------------------------------------------------------------------------//        
    } catch(error) {
        alert(error);
        for (i = 0; i < divArray.length; i++) {
            divArray[i].textContent = 'Error: No negatives allowed';
        };
    };
}; 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////