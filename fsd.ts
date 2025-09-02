
function barrier(nums: number[]): void {
    let num: number = 0;
    let xyz: number = 33
    do {
        num++
        xyz--
    } while (xyz > 25)
//console.log(`Once xyz reaches 25 nums is: ${num}`)
}
barrier([1, 2, 1, 0])

let TripleStr = ["Monday", "Wednesday", "Sunday"]
const level = 1, nextLevel = 2, maxLevel = 100
var construct = 1974

//What enums do: counts alphanumerically from 0 to inf(unless specified)
enum Direction  {
    sun = "shines",
    moon = "glows",
    river = "Flows",
    waterfall = "Cascades"
}
enum steps {
    store,
    park, 
    beach,
    city
}
for (let key in steps) {
  console.log(key, steps[key as keyof typeof steps])  
}


// How interface works - exceeds type when it comes to: extensibility/importing
//types can't merge
interface countries {
    Philippines: "island",
    Vietnam: string,
    USA: "Massive Country",
    miles: number,
    insufficientFunds: boolean
}
interface goods {
    cheeseburger: GLfloat,
    discount?: 10,
    caramel_apple: GLfloat
    readonly fries: GLfloat
}
const c: goods = {cheeseburger: 10.99, caramel_apple: 7.99, fries: 6.99};
//console.log(c)


interface language {
    languages: string,
    region: string,
    setjaSaman(): void;
        }
    
    let Icelandic: language = {
        languages: "Nordic",
        region: "Europe",
        setjaSaman() {
    console.log("Language not in data base")
}
    };
    Icelandic.setjaSaman();


    //when to utilize type over interface:
    //interface can't build unions, be used in intersections, or update primitives and
    //tuples, advanced transformations(mapped and conditionals)
type dataType = "secretCode - 10789215" | "granted_access" | "invalid_login";
let dt: dataType = "secretCode - 10789215";

type tool = {Director: string, income: number}
type worker = {contact: number}
type structure = "Store Director & Manager & employee";
const newStructure: structure = {position: "Store Director", contact: 300, Director: "new",
    income: 90000
};

//primitive and tuple updated to union.
type thing = "Chair"
type coordinates = [number, number]
type response = string | null;
//mapped + conditionals
type Readonly<T> = {
   readonly [K in keyof T]: T[K];
}
type User = {name: string, age: number}
type ReadonlyUser = Readonly<User>;


//the wonderful world of building classes
class BigObject {
   size: string;
   weight: number ;
   constructor(size: string, weight: number) {
    this.size = size;
    this.weight = weight
   }
   calculate(): void {
    console.log(`this big object is ${this.size} tall and it's weight is${this.weight}`)
   }
}
const result = new BigObject("Eight foot", 2000)
result.calculate();
//class access modifiers
class goodCredit {
   public owner: string; //global?
   private balance: number; //class only
   protected account: string; //class and subclasses
   constructor(owner: string, balance: number, account: string) {
    this.owner = owner;
    this.balance = balance;
    this.account = account;
   }
   deposit(amount: number): void {
    this.balance == amount
   }
   getBalance(): number {
    return this.balance;
   }
}
const acc = new goodCredit("Mike", 500, "Acc120");
acc.deposit(200);
console.log(acc.getBalance());
//shorthand property Declaration
class Car {
constructor(public brand: string, private year: number) {}
info(): void {
    console.log(`${this.brand} (${this.year})`);
        }
    }
    const car = new Car("Toyota", 2021);
    car.info()
//inheritance. extends works like python's super()
class Engine {
    constructor(public name: string) {}
    horsePower(): void {
        console.log(`It's cc is ${this.horsePower}`);
    }
}
class HyperEngine extends Engine {
    horsePower(): void {
        console.log("I do over 200cc")
    }
}
const maxHyperEngine = new HyperEngine("250cc");
maxHyperEngine.horsePower()
//class with interfaces. implements enforces structure
//interface handles contracts only
interface Drivable {
    drive(): void;
}
class Truck implements Drivable {
 drive(): void {
 console.log("driving the truck...")
}
}
const upgrade = new Truck();
upgrade.drive()
//Abstract classes. contracts & shared logic
abstract class Tree {
    constructor(public name: string) {}
    abstract whatFruit(): void;
    move(): void {
        console.log(`${this.name} has bananas`)
    }
}
//extending Abstract class
class Fruit extends Tree {
    whatFruit(): void {
        console.log("Banana")
    }
}
class RareFruit extends Fruit {
    whatFruit(): void {
        console.log("Kiwi")
    }
}
const f = new Fruit("Orange");
f.move()
f.whatFruit()
