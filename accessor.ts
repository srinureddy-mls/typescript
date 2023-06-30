const fullNameMaxLength = 10;
 
class Employee {
  private _fullName: string = "";
 
  get fullName(): string {
    return this._fullName;
  }
 
  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
 
    this._fullName = newName;
  }
}
 
let employee1 = new Employee();
employee1.fullName = "Bob Smith";
 
if (employee1.fullName) {
  console.log(employee1.fullName);
}
