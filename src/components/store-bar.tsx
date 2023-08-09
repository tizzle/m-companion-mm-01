import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/solid";

const StoreBar = () => {
  return (
    <div className="flex items-center justify-center flex-shrink-0 px-4 space-x-2 text-white bg-mediumBlue h-11">
      <MapPinIcon className="w-5 h-5 text-white" />
      <span>Metro Düsseldorf</span>
      <ChevronDownIcon className="w-5 h-5 text-white" />
    </div>
  );
};

export default StoreBar;
