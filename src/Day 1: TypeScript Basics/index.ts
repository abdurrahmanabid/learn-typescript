export default () => {
  // types
  let n: number = 23;
  let b: boolean = false;
  let s: string = "Hello";
  let obj: { name: string; age: number; skill: [string, string]; address: {} } =
    {
      name: "hello",
      age: 23,
      skill: ["mern", "html"],
      address: { street: "123", house: "Howlader" },
    };
  let arr: Array<string | number> = [123, "q"];

  // also can be use the 'type' keyword for assign th type
  // FOR EXAMPLE

  type array = Array<string>;
  let arr2: array = ["a", "n", "d"];
};
