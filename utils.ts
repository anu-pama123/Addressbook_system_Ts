declare var require: any;
const ps = require("prompt-sync");
const addressBookData = require("./data.json");
const prompt = ps();
var fs = require('fs');

function writeDataToJsonfile(nameAddressMap:any) {
    let dataList = [];
    for (let key in nameAddressMap) {
        let value = nameAddressMap[key];
        let personObj = value["person"];
        dataList.push({
            "firstName":personObj.firstName,
            "lastName":personObj.lastName,
            "emailId":personObj.emailId,
            "phoneNumber":personObj.phoneNumber,
            "city":personObj.city,
            "state":personObj.state,
            "zipCode":personObj.zipCode,
        });
    }

    fs.writeFile ("./data.json", JSON.stringify(dataList), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
}

function loadDataFromJsonFile() {
    return addressBookData;
}

function readInput(): any {
    let firstName = prompt("Enter your firstName : ");
    let lastName = prompt("Enter your lastName : ");
    let emailId = prompt("Enter your emailId : ");
    let phoneNumber = prompt("Enter your phoneNumber : ");
    let city = prompt("Enter your city : ");
    let state = prompt("Enter your state : ");
    let zipCode = prompt("Enter your zipCode : ");
    
    return {
        "firstName": firstName,
        "lastName": lastName,
        "emailId": emailId,
        "phoneNumber": phoneNumber,
        "city": city,
        "state" : state,
        "zipCode" : zipCode
    };
}

function printAddressData(personObj:any) {
    console.log("firstName : ", personObj.firstName)
    console.log("lastName : ", personObj.lastName)
    console.log("emailId : ", personObj.emailId)
    console.log("phoneNumber : ", personObj.phoneNumber)
    console.log("city : ", personObj.city)
    console.log("state : ", personObj.state)
    console.log("zipCode : ", personObj.zipCode)
    console.log("\n-----------------------------\n")
}

function updateObject(userData:any, personObj:any) {
    personObj.firstName = userData["firstName"]
    personObj.lastName = userData["lastName"]
    personObj.emailId = userData["emailId"]
    personObj.phoneNumber = userData["phoneNumber"]
    personObj.city = userData["city"]
    personObj.state = userData["state"]
    personObj.zipCode = userData["zipCode"]
    console.log("updated!...")
}

export {readInput, printAddressData, writeDataToJsonfile, loadDataFromJsonFile, updateObject, prompt};