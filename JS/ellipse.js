document.getElementById('btn-ellipse').addEventListener('click',function () {
    let ellipseValueD1 = paragrapField('ellipse-value1');
    let ellipseValueD2 =paragrapField('ellipse-value2');
    setValuesParagraphEllipse(parseFloat(ellipseValueD1),parseFloat(ellipseValueD2),'ellipse-field1','ellipse-field2');

    let AreaOfEllipse = calculationEllipseArea(parseFloat(ellipseValueD1),parseFloat(ellipseValueD2)) ;
    console.log(AreaOfEllipse);  
    
})