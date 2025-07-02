let person = "Klaus";

// person = 7;
//
// person = null;
//
// person = function() {}
//
// person = true;

person.toLowerCase();

const employee: IEmployee  ={
  lastname: "Meier",
  salary: 30000,
}

type TEmployee = {
  lastname: string;
  salary: number;
}

type TPublicOffical = {
  lastname: string;
  salary: number;
}

// Java: Nominal Typing ("Name gewinnt")
//  interface Person1 { String getName() } // Package 1
//  interface Person2 { String getName() } // Package 2
// TypeScript: Structural Typing ("Struktur gewinnt")
//   "Duck Typing" (Umgangssprachlich!)

const x: TPublicOffical  ={
  lastname: "Dr. Meier",
  salary: 10000000
}


interface IEmployee  {
  lastname: string;
  // salary?: number;
  salary: number | undefined
}

function increaseSalary(employee: TEmployee) {
  if (employee.lastname === "Chef") {
    return ;
  }
  employee.salary = employee.salary + 100;
}

increaseSalary(x);

// increaseSalary(employee)

increaseSalary({
  lastname: "Meier",
  salary: 30000,
})

function sayHello(name: string) {
  return "Hallo";
}

let hello = sayHello("");