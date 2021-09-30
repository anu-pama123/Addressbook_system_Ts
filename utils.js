"use strict";
exports.__esModule = true;
var ps = require("prompt-sync");
var prompt = ps();
exports.prompt = prompt;
var fs = require('fs');
function writeDataToJsonfile(nameAddressMap) {
    var dataList = [];
    for (var key in nameAddressMap) {
        var value = nameAddressMap[key];
        var personObj = value["person"];
        dataList.push({
            "firstName": personObj.firstName,
            "lastName": personObj.lastName,
            "emailId": personObj.emailId,
            "phoneNumber": personObj.phoneNumber,
            "city": personObj.city,
            "state": personObj.state,
            "zipCode": personObj.zipCode
        });
    }
    fs.writeFile("./data.json", JSON.stringify(dataList), function (err) {
        if (err)
            throw err;
        console.log('complete');
    });
}
exports.writeDataToJsonfile = writeDataToJsonfile;
function readInput() {
    var firstName = prompt("Enter your firstName : ");
    var lastName = prompt("Enter your lastName : ");
    var emailId = prompt("Enter your emailId : ");
    var phoneNumber = prompt("Enter your phoneNumber : ");
    var city = prompt("Enter your city : ");
    var state = prompt("Enter your state : ");
    var zipCode = prompt("Enter your zipCode : ");
    return {
        "firstName": firstName,
        "lastName": lastName,
        "emailId": emailId,
        "phoneNumber": phoneNumber,
        "city": city,
        "state": state,
        "zipCode": zipCode
    };
}
exports.readInput = readInput;
function printAddressData(personObj) {
    console.log("firstName : ", personObj.firstName);
    console.log("lastName : ", personObj.lastName);
    console.log("emailId : ", personObj.emailId);
    console.log("phoneNumber : ", personObj.phoneNumber);
    console.log("city : ", personObj.city);
    console.log("state : ", personObj.state);
    console.log("zipCode : ", personObj.zipCode);
    console.log("\n-----------------------------\n");
}
exports.printAddressData = printAddressData;