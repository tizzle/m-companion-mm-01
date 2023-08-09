import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FilterBar = () => {
  return (
    <div className="flex flex-shrink-0 h-12 p-2 space-x-2 bg-white">
      <div className="flex items-center px-2 space-x-1 text-sm border rounded-full border-darkBlue h-7 text-darkBlue">
        <span>Alle Kategorien</span>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
      <div className="flex items-center px-2 space-x-1 text-sm border rounded-full border-darkBlue h-7 text-darkBlue">
        <span>Promotions</span>
      </div>
    </div>
  );
};

export default FilterBar;
