import { use } from "react";
import type { TechnologyType } from "./types/technology";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

// // 3
// const TechnologyDataPromise = async ():Promise<TechnologyType[]> => {
//   const res = await fetch("./src/data/technology.json");
//   const data = await res.json();
//   return data;
//   // console.log(data);
// };

// const DataPromise:Promise<TechnologyType[]> = TechnologyDataPromise();
// const Data = use(DataPromise);
// console.log(Data);
function App() {
  // 5

  return (
    <>
      {/* <h1 className="text-2xl text-red-900">DevStack</h1> */}
      <Nav/>
      <Banner/>
    </>
  );
}

export default App;
