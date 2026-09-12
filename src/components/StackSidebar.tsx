import type { TechnologyType } from "../types/technology";

interface StackSidebarProps {
  stack: TechnologyType[];
  onRemove: (id: TechnologyType["id"]) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="mt-21 w-full lg:w-72 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm h-fit sticky top-6">
      <h3 className="font-semibold text-gray-900 mb-4">Your Stack</h3>

      {stack.length === 0 && (
        <p className="text-sm text-gray-400">No technology added yet.</p>
      )}

      {stack.map((tech) => (
        <div key={tech.id} className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
            <span className="text-sm text-gray-700">{tech.name}</span>
          </div>
          <button
            onClick={() => onRemove(tech.id)}
            className="text-xs text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 text-sm text-gray-500 border border-gray-200 rounded-lg py-2 hover:bg-gray-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;