import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";

export interface TopBarProps {
  onSubmit: (value: string) => void;
}

const TopBar = ({ onSubmit }: TopBarProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      console.log("focus");
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [setSearchTerm]
  );

  const handleClearInput = React.useCallback(() => {
    setSearchTerm("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    onSubmit && onSubmit(searchTerm);
  };

  return (
    <div className="flex items-center flex-shrink-0 h-12 pl-2 pr-4 space-x-4 bg-darkBlue">
      <ChevronLeftIcon className="flex-shrink-0 w-6 h-6 text-white" />
      <form
        className="relative flex items-center justify-start flex-grow h-8 px-2 space-x-2 bg-white rounded-lg text-15"
        onSubmit={handleSubmit}
      >
        <MagnifyingGlassIcon className="w-4 h-4 text-grey" />
        <input
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow outline-none"
          placeholder="Sortiment durchsuchen"
          autoFocus={true}
          ref={inputRef}
        />
        {searchTerm !== "" && (
          <XCircleIcon
            className="flex-shrink-0 w-5 h-5 text-grey-tint-80"
            onClick={handleClearInput}
          />
        )}
      </form>
      <p className="text-white">Abbrechen</p>
    </div>
  );
};

export default TopBar;
