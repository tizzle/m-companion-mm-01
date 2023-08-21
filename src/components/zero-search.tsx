import moon from "../assets/moon.svg";

const ZeroSearch = () => {
  return (
    <div className="flex flex-col items-center flex-grow px-8 py-6 space-y-6 overflow-scroll bg-appBgBlue">
      <h1 className="w-full text-3xl font-semibold">
        Nichts zu "FritzBox" in METRO Düsseldorf gefunden.
      </h1>
      <img src={moon} className="w-full max-w-sm" />
      <button className="text-center border-none text-interaction">
        Möchten sie noch einmal suchen?
      </button>
    </div>
  );
};

export default ZeroSearch;
