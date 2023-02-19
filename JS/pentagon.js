document.getElementById('btn-pentagon').addEventListener('click',function () {

    count += 1;
    let pentagonValueD1 = paragrapField('pentagon-value1');
    let  pentagonValueD2 =paragrapField('pentagon-value2');
    setValuesParagraphField(parseFloat(pentagonValueD1),parseFloat(pentagonValueD2),'pentagon-field1','pentagon-field2');


    let AreaOfRhombus = calculation(parseFloat(pentagonValueD1),parseFloat(pentagonValueD2)) ;
    console.log(AreaOfRhombus);   
    



    let name = document.getElementById('pentagon').innerText;

  displayData(name,AreaOfRhombus,count);
})