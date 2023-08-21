import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/app-bar";
import TopBar from "../components/top-bar";
import CloseIcon from "../icons/icon-close";

const ls = ["Coca-Cola", "Parmesan", "Dorade"];

const Home = () => {
  const [lastSearched, setLastSearched] = React.useState(ls);
  const navigate = useNavigate();

  const handleSubmit = React.useCallback(() => {
    console.log("submit");
    navigate("/results");
  }, [navigate]);

  const handleClearLastSearched = React.useCallback(() => {
    setLastSearched([]);
  }, []);

  const handleRemoveLastSearch = React.useCallback(
    (l: string) => {
      setLastSearched(lastSearched.filter((s) => s !== l));
    },
    [lastSearched]
  );

  return (
    <>
      <TopBar onSubmit={handleSubmit} />
      <div className="flex-grow">
        <div className="flex justify-between px-4 pt-6 pb-2 bg-gray-100">
          <p className="text-gray-600 uppercase text-13">Zuletzt gesucht</p>
          <p
            className="text-blue-500 cursor-pointer text-14"
            onClick={handleClearLastSearched}
          >
            Delete all
          </p>
        </div>
        {lastSearched.map((l) => (
          <div
            key={l}
            className="flex flex-row p-3 space-x-2 border-b border-gray-300"
          >
            <div
              className="cursor-pointer"
              onClick={() => handleRemoveLastSearch(l)}
            >
              <CloseIcon className="flex-shrink-0 w-6 h-6 text-gray-500" />
            </div>
            <p>{l}</p>
          </div>
        ))}
      </div>
      <AppBar />
    </>
  );
};

export default Home;
