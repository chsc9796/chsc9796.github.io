const json = {
    "companyName": "Tech Stars", // Problem 2
    "website": "www.techstars.site",
    "employees": [
        {
            "first name": "Sam", // Problem 1
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true,
            "wfh": true     
        },
        {
            "first name": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true,
            "wfh": false       
        },
        {
            "first name": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false,
            "wfh": false        
        },
        
    ]
};

// Problem 1
console.log(json["employees"]);

// Problem 2
console.log(json["companyName"]);
console.log(json["website"]);

// Problem 3
const newemployee = { // Problem 3
    "first name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false,
    "wfh": true
};
json["employees"].push(newemployee); 

console.log(json["employees"]); 

// Problem 4
let totalSal = 0; 
for (let i = 0; i < 4; i++) {
    totalSal += json["employees"][i].salary;
}

console.log(totalSal); 

// Problem 5
for (let j = 0; j < 4; j++) { 
    if (json["employees"][j]["raiseEligible"] === true){
        json["employees"][j].salary = Number(json["employees"][j].salary) + Number(json["employees"][j].salary)*0.1;
        json["employees"][j].raiseEligible = false;
    }
    console.log(json["employees"][j].salary)
}

// Problem 6
for (let k = 0; k < 4; k++){
    console.log(json["employees"][k].wfh);
}