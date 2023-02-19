
document.getElementById('btn-parallelogram').addEventListener('click',function () {

    let parallelogramValueB = paragrapField('parallelogram-value1');
    let parallelogramValueH =paragrapField('parallelogram-value2');
   
    setValuesParagraphField(parseFloat(parallelogramValueB),parseFloat(parallelogramValueH),'parallelogram-b','parallelogram-h');
   
    let AreaOfPallelogram = RectangleParallelogram(parseFloat(parallelogramValueB),parseFloat(parallelogramValueH)) ;
    console.log(AreaOfPallelogram);
   
   })