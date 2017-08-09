var sml = prompt("Enter the current minimum wage");
sm = Number(sml);
var salarys = prompt(" Enter your monthly salary");
salary = Number(salarys);
var days = prompt("Enter days worked		");
if ((days > 30) || (days <= 0)) {
  console.log("Should be maximum 30 days and minimum 0 ");
}

var dt = (salary / 30);
total = (dt * days);
if (salary <= 2 * sm) {
  tp = sm * 0.1;
  console.log(" You have transportation aid of 10 percent	 ");
  console.log("His salary is " + (total) + "  more " + tp);
  console.log(" TOTAL SALARY " + (total + tp));
} else if (((salary >= 4 * sm) && (total >= 4 * sm))) {
    var reten = prompt(" Enter retention percentage	 ");
    tr = (total * (reten / 100));
    console.log(" The retention is	" + tr);
    console.log(" Su sueldo es " + (total - tr));
  } else {
    console.log("You have no transportation aid	");
    console.log(" His salary is " + total);
          }











