const mcqs = [
     {
        'question':'What is your name',
        'option':{
            'A': 'Doe',
            "B": 'john'
        },
        'answer': "A"
    },
     {
        'question':'What is your age',
        'option':{
            'A': '16',
            "B": '25'
        },
        'answer': "B"
    },
     {
        'question':'What is your skin color',
        'option':{
            'A': 'Doe',
            "B": 'john'
        },
        'answer': "A"
    },
]

const displayQuize = (mcqs) => {
    const questionDisplay = document.getElementById('questions')

 for(var i = 0; i<=mcqs.length; i++){
    const p = document.createElement('p')
   
   
    const ul = document.createElement('ul')
    Object.entries(mcqs[i]['option']).map((key, value)=>{
        const li = document.createElement(`li`)
        li.className = 'option'
        ///document.getElementsByClassName('option').style.none
        li.textContent  = `${key} `
        ul.appendChild(li)
    })
    p.textContent = mcqs[i]['question']
    questionDisplay.appendChild(p)
    questionDisplay.appendChild(ul)

 }
}

displayQuize(mcqs);

   



function store(){

}
