
document.getElementById('btn-parallelogram').addEventListener('click',function () {
    count += 1;
    let parallelogramValueB = paragrapField('parallelogram-value1');
    let parallelogramValueH =paragrapField('parallelogram-value2');
   
    setValuesParagraphField(parseFloat(parallelogramValueB),parseFloat(parallelogramValueH),'parallelogram-b','parallelogram-h');
   
    let AreaOfPallelogram = RectangleParallelogram(parseFloat(parallelogramValueB),parseFloat(parallelogramValueH)) ;
    console.log(AreaOfPallelogram);



    let name = document.getElementById('parallelogram').innerText;

  displayData(name,AreaOfPallelogram,count);
   
   })