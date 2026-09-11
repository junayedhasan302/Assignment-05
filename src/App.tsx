import { useState, useEffect, use } from "react";
import type { TechnologyType } from "./types/technology";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";

function App() {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTechnologies() {
      const response = await fetch("/technology.json");
      const data = await response.json();

      
      console.log(data);

      setTechnologies(data);
      setLoading(false);
    }

    fetchTechnologies();
  }, []);

  return (
    <>
      {/* <h1 className="text-2xl text-red-900">DevStack</h1> */}
      <Nav />
      <Banner />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
      max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-25">
        {technologies.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </>
  );
}

export default App;
