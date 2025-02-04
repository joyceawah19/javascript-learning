const readline = require('readline');


const bank = [
    {
            'ownerName': 'ownerName',
            "acctId": 1,
            'acctype':'technician',
            'age':21,
           'balance':20000
        },
        {
            'ownerName': 'ownerName',
            "acctId": 2,
            'acctype':'technician',
            'age':21,
           'balance':20000 
        },
]

class BankAcct{
    constructor(ownerName, acctId, balance, acctype,age){
    this.ownerName=ownerName, this.acctId = acctId, this.balance=balance, this.acctype=acctype, this.age
    }
    displayUsers(){
       // display = document.querySelector("")

       for(const[key, value] of bank.entries()){
        console.log(`${key}: ${value}`);
       }
    }
   

}
