
function inputField(id,value1) {
let triangleInputFieldB=document.getElementById(id);
   triangleInputFieldB.value = value1;
   return triangleInputFieldB.value;
   

}

function calculation(value1,value2) {
    let Area = 0.5 * value1 * value2;
    return Area;

}

function RectangleParallelogram(value1,value2) {
    let Area = value1 * value2;
    return Area
}

function setValues(idField1,idField2,value1,value2) {
   let triangleValueB= document.getElementById(idField1);
   let triangleValueH= document.getElementById(idField2);
   triangleValueB.innerText = value1;
   triangleValueH.innerText = value2;
 
}

document.getElementById('btn-triangle').addEventListener('click',function () {
   let inputValueB= inputField('triangle-input-field-b',30)
   let inputValueH= inputField('triangle-input-field-h',50) 
  let totalArea= calculation(parseFloat(inputValueB),parseFloat(inputValueH));
  console.log(parseFloat(totalArea));
 setValues('triangle-b','triangle-h',parseFloat(inputValueB),parseFloat(inputValueH));
 

})



document.getElementById('btn-rectangle').addEventListener('click',function () {
   let inputValueB= inputField('rectangle-input-field-w',5)
   let inputValueH= inputField('rectangle-input-field-l',10) 
  let totalArea= RectangleParallelogram(parseFloat(inputValueB),parseFloat(inputValueH));
  console.log(parseFloat(totalArea));
  setValues(id="rectangle-w","rectangle-l",parseFloat(inputValueB),parseFloat(inputValueH));

})



