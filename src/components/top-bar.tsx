import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import BarcodeIcon from "../icons/icon-barcode";

const TopBar = () => {
  return (
    <div className="flex items-center flex-shrink-0 h-12 px-2 space-x-4 bg-darkBlue">
      <ChevronLeftIcon className="w-6 h-6 text-white" />
      <div className="relative flex items-center justify-start flex-grow h-8 px-2 space-x-2 bg-white rounded-lg text-15">
        <MagnifyingGlassIcon className="w-4 h-4 text-grey" />
        <input value="FritzBox" className="flex-grow" readOnly />
        <XCircleIcon className="w-5 h-5 text-grey-tint-80" />
      </div>
      <BarcodeIcon className="text-white" />
    </div>
  );
};

export default TopBar;
