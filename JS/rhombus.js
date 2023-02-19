document.getElementById('btn-rhombus').addEventListener('click',function () {

    count += 1;
    let rombhusValueD1 = paragrapField('rhombus-value1');
    let rombhusValueD2 =paragrapField('rhombus-value2');
    setValuesParagraphField(parseFloat(rombhusValueD1),parseFloat(rombhusValueD2),'rhombus-field1','rhombus-field2');


    let AreaOfRhombus = calculation(parseFloat(rombhusValueD1),parseFloat(rombhusValueD2)) ;
    console.log(AreaOfRhombus);  
    
   


    let name = document.getElementById('rombhus').innerText;

  displayData(name,AreaOfRhombus,count);
    
})