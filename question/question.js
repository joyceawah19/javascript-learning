function totalscore(){

    const FormData = document.getElementById('form');
    let score = 0;

    const fav = FormData.fav.value;
    const age = FormData.age.value;
    const books= FormData.books.value;

    if( fav === 'correct'){
      score++;
    }
    if( age === 'correct'){
        score++;
    }
    if( books === 'correct'){
        score++;
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your score is ${score} out of 2.`;

 
}