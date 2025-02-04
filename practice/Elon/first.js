function equal(){
    const resultfied = document.getElementById('textviewer');
    try{
        resultfied.value = 
        eval(resultfied.value);
    }catch(error){
       resultfied.value = 'error'
    }
}