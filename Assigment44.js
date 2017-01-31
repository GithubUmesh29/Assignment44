/*
Create a generic class with property name, then
○ setName() with generic type
○ getName() with generic type
Now create instances for that class with different-different types. And display message using console.
*/
var getFullInfo = (function () {
    function getFullInfo() {
    }
    getFullInfo.prototype.setName = function (name) {
        this.name = name;
    };
    getFullInfo.prototype.getName = function () {
        return this.name;
    };
    return getFullInfo;
}());
var gen1 = new getFullInfo();
gen1.setName("Hello World");
console.log(gen1.getName());
//alert(gen1.getName());
var gen2 = new getFullInfo();
gen2.setName(1);
console.log(gen1.getName());
//alert(gen2.getName());
var gen3 = new getFullInfo();
gen3.setName(true);
console.log(gen1.getName());
var User = (function () {
    function User() {
    }
    User.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setAge = function (paramAge) {
        this.age = paramAge;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setEmail = function (paramEmail) {
        this.email = paramEmail;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    return User;
}());
var varUser = new User();
varUser.setName('Umesh');
console.log(varUser.getName());
varUser.setAge(29);
console.log(varUser.getAge());
varUser.setEmail('jaiurb@gmail.com');
console.log(varUser.getEmail());
