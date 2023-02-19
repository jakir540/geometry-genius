
function inputField(id,value1) {
let triangleInputFieldB=document.getElementById(id);
   triangleInputFieldB.value = value1;
   return triangleInputFieldB.value; 

}

function paragrapField(paragrapField1) {
 let parallelogramValue=document.getElementById(paragrapField1).innerText;
return parallelogramValue;


}
function setValuesParagraphField(paralleValueB,paralleValueH,paragrapField1Id,paragrapField2Id) {
    let pallelogramValueB= document.getElementById(paragrapField1Id);
    let pallelogramValueH= document.getElementById(paragrapField2Id);
    pallelogramValueB.innerText = paralleValueB;
    pallelogramValueH.innerText = paralleValueH;
   
   
   
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



