//-------------------------------------------------------------------//
//Things that should be in CSS/HTML but aren't and other declarations//
//-------------------------------------------------------------------//
document.body.style.background = "url('https://i0.wp.com/assets.change.org/photos/8/id/eg/bnidEGzwDyUbCzk-1600x900-noPad.jpg?1508765120?resize=91,91')";
let container = document.createElement('div');
container.style.padding = '10px';
container.style.width = '420px';
container.style.height = '255px';
container.style.border = '1px black solid';
container.style.borderRadius = '2px';
container.style.position = 'relative';
container.style.left = '33%';
container.style.top = '50px';
container.style.background = 'rgba(255, 255, 255, 0.97)';
document.body.appendChild(container);
let header = document.createElement('h2');
header.textContent = 'coolmath-games.com'
container.appendChild(header);
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
let supercount = 1;
let subcount = 0;
//---------------------------------------------------------//
let divArray = [div1, div2, div3, div4, div5, div6, div7, div8, div9];
for (i = 0; i < divArray.length; i++) {
    subcount++;
    divArray[i].value = [subcount, 0];
}
//---------------------------------------------------------//
button.addEventListener('click', () => {
    val1 = input1.value;
    val2 = input2.value;
    if (input1.value > 0 || input2.value > 0) {
        for (i = 0; i < divArray.length; i++) {
            divArray[i].textContent = '';
            divArray[i].style.fontWeight = 'normal';
        };
        subcount = 0;
        doMath(val1, val2);
        if (input1.value == 4 && input2.value == 20) {
            header.textContent = 'nice';
        };
        if (input1.value == 6 && input2.value == 9) {
            header.textContent = 'nice';
        };
    } else {
        alert('Error: Please input two values. One of the values must be greater than zero and both values cannot be zero or negative.')
    };
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function doMath(val1, val2) {
    try {
        div1.textContent = `Adding ${val1} and ${val2}` ;
        let result = await slowMath.add(val1, val2);
        div1.textContent = result;
        subcount++;
        arr1 = [subcount, supercount];
        div1.value = arr1;
        header.textContent = 'coolmath-games.com';
        //---------------------------------------------------------------------------------------//
        div2.textContent = `Multiplying ${result} and 2`;
        result = await slowMath.multiply(result, 2);
        div2.textContent = result;
        subcount++;
        arr2 = [subcount, supercount];
        div2.value = arr2;
        //---------------------------------------------------------------------------------------//        
        div3.textContent = `Dividing ${result} and 4`;
        result = await slowMath.divide(result, 4);
        div3.textContent = result;
        subcount++;
        arr3 = [subcount, supercount];
        div3.value = arr3;
        //---------------------------------------------------------------------------------------//        
        div4.textContent = `Subtracting ${result} and 3`;
        result = await slowMath.subtract(result, 3);
        div4.textContent = result;
        subcount++;
        arr4 = [subcount, supercount];
        div4.value = arr4;
        //--------------------------------------------------------------------------------------//        
        div5.textContent = `Adding ${result} and 98`;
        result = await slowMath.add(result, 98);
        div5.textContent = result;
        subcount++;
        arr5 = [subcount, supercount];
        div5.value = arr5;
        //---------------------------------------------------------------------------------------//        
        div6.textContent = `Modulating ${result} and 2`;
        result = await slowMath.remainder(result, 2);
        div6.textContent = result;
        subcount++;
        arr6 = [subcount, supercount];
        div6.value = arr6;
        //---------------------------------------------------------------------------------------//        
        div7.textContent = `Multiplying ${result} and 50`;
        result = await slowMath.multiply(result, 50);
        div7.textContent = result;
        subcount++;
        arr7 = [subcount, supercount];
        div7.value = arr7;
        //---------------------------------------------------------------------------------------//        
        div8.textContent = `Modulating ${result} and 40`;
        result = await slowMath.remainder(result, 40);
        div8.textContent = result;
        subcount++;
        arr8 = [subcount, supercount];
        div8.value = arr8;
        //---------------------------------------------------------------------------------------//        
        div9.textContent = `Adding ${result} and 32`;
        result = await slowMath.add(result, 32);
        div9.style.fontWeight = 'bold';
        div9.textContent = `The final result of successful operation #${supercount} is ${result}.`;
        subcount++;
        arr9 = [subcount, supercount];
        div9.value = arr9;
        supercount++;
    //-------------------------------------------------------------------------------------------//        
    } catch(error) {
        for (i = 0; i < divArray.length; i++) {
            [x, y] = divArray[i].value; //y-values not needed anymore but could be used for other stuff
            if (x == subcount + 1) {
                divArray[i].style.fontWeight = 'bold';
                divArray[i].textContent = `${error} Negatives invalid.`;
            }; 
        };
    };
}; 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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