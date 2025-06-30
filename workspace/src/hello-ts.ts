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


interface IEmployee  {
  lastname: string;
  // salary?: number;
  salary: number | undefined
}

function increaseSalary(employee: TEmployee ) {
  employee.salary = employee.salary + 100;
}

// increaseSalary(employee)

increaseSalary({
  lastname: "Meier",
  salary: 30000,
})

function sayHello(name: string) {
  return "Hallo";
}

let hello = sayHello("");