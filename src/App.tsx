import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyList from "./components/TechnologyList";
import StackSidebar from "./components/StackSidebar";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import type { TechnologyType } from "./types/technology";
import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState<TechnologyType[]>([]);
  //Add
  function addToStack(tech: TechnologyType) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  }
  //Remove
  function removeFromStack(id: TechnologyType["id"]) {
    const removedTech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack`);
    }
  }
  //Remove All
  function removeAll() {
    setStack([]);
    toast.info("All technologies removed from your stack");
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <Nav />
      <Banner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 mt-10">
        <div className="flex-1">
          <TechnologyList stack={stack} onAdd={addToStack} />
        </div>

        <StackSidebar
          stack={stack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </div>
      <Footer/>
    </>
  );
}
export default App;



// Assignment: 05
// live Link: jhdevstack.netlify.app

// DEVELOPER DETAILS
// Junayed Hasan
// Programming Hero: WEB14-0687


// github.com/junayedhasan302
// https://www.linkedin.com/in/junayet-hasan-jh/