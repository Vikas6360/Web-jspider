let stu_name=prompt("Enter Student name:");
let stu_number=Number(prompt("Enter Student Number"));
let stu_mar_1=Number(prompt("Enter 1st sub Marks:"));
let stu_mar_2=Number(prompt("Enter 2nd sub Marks:"));
let stu_mar_3=Number(prompt("Enter 3rd sub Marks:"));

let tol_m=stu_mar_1+stu_mar_2+stu_mar_3;
let avg=(stu_mar_1+stu_mar_2+stu_mar_3)/3;

alert("Student name:"+stu_name);
alert("Student roll number:"+stu_number);
alert("Total marks:"+tol_m);
alert("Average marks:"+avg);

document.writeln("Student name:"+stu_name);
document.writeln("</br>")
document.writeln("Student roll number:"+stu_number);
document.writeln("</br>")
document.writeln("Total marks:"+tol_m)
document.writeln("</br>")
document.writeln("Average marks:"+avg)
document.writeln("</br>")

console.log("Student name:"+stu_name);
console.log("Student roll number:"+stu_number);
console.log("Total marks:"+tol_m);
console.log("Average marks:"+avg);