export default () => {
 // Define GenericData as a type, not a const
type GenericData<T> = {
  data: T;
};

const fetchData = async () => {
  try {
    const res = await fetch("http://google.com");
    console.log(res);
    
    // const data: GenericData<string> = await res.json(); // Type-safe!
  } catch (err) {
    console.log(err);
  }
};

fetchData();

};
