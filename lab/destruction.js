let students = {
    name: "Yaswanth",
    age: 20,
    country: "India",
    college: "XYZ",
    branch: "CSE"
};

let {
    name: studentName,
    age,
    country = "India",
    ...otherDetails
} = students;

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Country:", country);
console.log("Other Details:", otherDetails);