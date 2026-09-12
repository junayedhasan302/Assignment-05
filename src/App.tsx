import { useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyList from "./components/TechnologyList";
import TechnologyGridSkeleton from "./components/TechnologyGridSkeleton";
import StackSidebar from "./components/StackSidebar";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import type { TechnologyType } from "./types/technology";

function App() {
  const [stack, setStack] = useState<TechnologyType[]>([]);

  function addToStack(tech: TechnologyType) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) return;

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  }

  function removeFromStack(id: TechnologyType["id"]) {
    const removedTech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack`);
    }
  }

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
          <Suspense fallback={<TechnologyGridSkeleton />}>
            <TechnologyList stack={stack} onAdd={addToStack} />
          </Suspense>
        </div>

        <StackSidebar
          stack={stack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />
      </div>
    </>
  );
}

export default App;
