document.getElementById('btn-triangle').addEventListener('click',function () {
  count += 1;
    let inputValueB= inputField('triangle-input-field-b',30)
    let inputValueH= inputField('triangle-input-field-h',50) 
   let totalArea= calculation(parseFloat(inputValueB),parseFloat(inputValueH));
   console.log(parseFloat(totalArea));
  setValues('triangle-b','triangle-h',parseFloat(inputValueB),parseFloat(inputValueH));

  let name = document.getElementById('triangle').innerText;

  displayData(name,totalArea,count);

 })
 

 