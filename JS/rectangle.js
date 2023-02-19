document.getElementById('btn-rectangle').addEventListener('click',function () {
    let inputValueB= inputField('rectangle-input-field-w',5)
    let inputValueH= inputField('rectangle-input-field-l',10) 
   let totalArea= RectangleParallelogram(parseFloat(inputValueB),parseFloat(inputValueH));
   console.log(parseFloat(totalArea));
   setValues("rectangle-w","rectangle-l",parseFloat(inputValueB),parseFloat(inputValueH));

 })



