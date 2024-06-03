#! /usr/bin/env/node

import inquirer from 'inquirer';

let myBalance=500000;
let myPin=5678;

console.log(" Welcome");

let pinAnswer = await inquirer.prompt([
        {
              name:"pin",
              message:"enter your pin number",
              type:"number"
}
])
if (pinAnswer.pin === myPin){
        console.log("correct pin number, login successfully!");
        // console.log(`your current account balance is ${myBalance} `) 
    
let operationAnswer = await inquirer.prompt( [
        {
             name:"operation",
             message:"select any option",
             type:"list",
             choices:["withdrawn","utility bills","check balance"]
 }
    ])
    
    if(operationAnswer.operation === 'check balance'){
        console.log(`your current balance is: ${myBalance}`);
    }
     if(operationAnswer.operation === 'withdrawn'){
        let withdrawnAns=await inquirer.prompt([
            {
               name:"withdrawnMethod",
               type:"list",
               message:"select withdrawn method",
               choices:["fastCash","enter your amount"]
           
            }
        ])
        if (withdrawnAns.withdrawnMethod === 'fastCash'){
            let fastcashAns=await inquirer.prompt([
                {
                    name:"fastCash",
                    type:"list",
                    message:"select amount",
                    choices:["5000","10000","15000"]
                }
            ])
            if(fastcashAns.fastCash > myBalance){
             console.log("insufficient balance");
            }
            else{
                myBalance -= fastcashAns.fastCash;
            console.log(`${fastcashAns.fastCash},withdrawn successfully!`);
            console.log(`your remaining balance is:${myBalance}`);
             }
        }
        else if(withdrawnAns.withdrawnMethod === 'enter your amount'){
     let amountAnswer = await inquirer.prompt([
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ])
    
        if( amountAnswer.amount > myBalance){
            console.log("insufficient balance");
       }
       else{
        myBalance -= amountAnswer.amount;
        console.log(`${amountAnswer.amount}withdrawn successfully!`);
        console.log(`your remaining balance is:${myBalance}`);
       }
   
}
     }

    

    //  if(operationAnswer.operation ===" check balance"){
    //     console.log(`your current balance is: ${myBalance}`);
    // }
    }   

else{
    console.log("invalid pin number,Try again!")

}

