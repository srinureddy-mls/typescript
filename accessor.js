var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = "";
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullName = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = "Bob Smith";
if (employee1.fullName) {
    console.log(employee1.fullName);
}
