export default () => {
  class Dog{
    name:string
    constructor(name:string){
      this.name = name
    }
  }
  const dog = new Dog('Tom')
  // console.log(dog.name); 

  class DogProperties extends Dog{
    age:number
    constructor(age:number,name:string){
      super(name)
      this.age=age
    }
    full(){
      console.log(this.name , this.age);
    }
  }
  let g = new DogProperties(123,"Tom")
  g.full()
}
