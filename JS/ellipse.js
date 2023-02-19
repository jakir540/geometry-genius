document.getElementById('btn-ellipse').addEventListener('click',function () {
    count +=1;
    let ellipseValueD1 = paragrapField('ellipse-value1');
    let ellipseValueD2 =paragrapField('ellipse-value2');
    setValuesParagraphEllipse(parseFloat(ellipseValueD1),parseFloat(ellipseValueD2),'ellipse-field1','ellipse-field2');

    let AreaOfEllipse = calculationEllipseArea(parseFloat(ellipseValueD1),parseFloat(ellipseValueD2)) ;
   

    let name = document.getElementById('ellipse').innerText;

    displayData(name,AreaOfEllipse,count);
    
})