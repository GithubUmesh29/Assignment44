/*
Create a generic class with property name, then 
○ setName() with generic type 
○ getName() with generic type 
Now create instances for that class with different-different types. And display message using console. 
*/

class getFullInfo<T>{

name: T;

setName(name : T) {
        this.name = name;
    }

getName() : T {
        return this.name;
    }
}


var gen1 = new getFullInfo<string>();
gen1.setName("Hello World");
console.log(gen1.getName());
//alert(gen1.getName());

var gen2 = new getFullInfo<number>();
gen2.setName(1);
console.log(gen1.getName());
//alert(gen2.getName());

var gen3 = new getFullInfo<boolean>();
gen3.setName(true);
console.log(gen1.getName());
//alert(gen3.getName());


/*
Create generic constraint:  
interface IUser { } 
class User<T extends IUser> { } 
As we already discussed, It means that T has to implement IUser. 
In simple terms it will restrict the type of T to anything that implements IUser. 
The importance of this is that you cannot really pass any data-type, but you just have to 
pass something specific (in this case it’s going to be IUser). Define some property in interface 
and use them in class. Display output using console.
*/

interface IUser<T>{
name: T;
age: T;        
email?: T;        
}

class User<T extends IUser<T>>{

name: T;
age: T;
email: T;

setName(paramName : T) {
        this.name = paramName;
}
getName() : T {
        return this.name;
}


setAge(paramAge : T) {
        this.age = paramAge;
}
getAge() : T {
        return this.age;
}

setEmail( paramEmail : T) {
        this.email = paramEmail;
}
getEmail() : T {
        return this.email;
}

}

var varUser = <any>new User();

varUser.setName('Umesh');
console.log(varUser.getName());

varUser.setAge(29);
console.log(varUser.getAge());

varUser.setEmail('jaiurb@gmail.com');
console.log(varUser.getEmail());






