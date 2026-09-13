import type { TechnologyType } from "../types/technology";

interface StackSidebarProps {
  stack: TechnologyType[];
  onRemove: (id: TechnologyType["id"]) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="w-full lg:w-72 lg:mt-21 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm h-fit lg:sticky lg:top-6">
      <h3 className="font-bold text-gray-900 text-lg mb-1">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {stack.length === 0 && (
        <p className="text-sm text-gray-400 border border-dashed px-5 py-3 rounded-lg mx-3 my-2">
          No technology added yet.
        </p>
      )}

      {stack.map((tech) => (
        <div
          key={tech.id}
          className="flex justify-between items-center border border-gray-200 rounded-xl p-3 mb-3"
        >
          <div className="flex items-center gap-3">
            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">{tech.name}</p>
              <p className="text-xs text-gray-400">{tech.category}</p>
            </div>
          </div>
          <button
            onClick={() => onRemove(tech.id)}
            className="text-gray-400 hover:text-red-500 text-lg leading-none px-1"
          >
            ✕
          </button>
        </div>
      ))}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 text-sm text-red-500 border border-red-600 font-semibold rounded-lg py-2 hover:bg-gray-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;