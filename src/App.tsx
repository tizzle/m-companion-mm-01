import AppBar from "./components/app-bar";
import FilterBar from "./components/filter-bar";
import SuggestionsSheet from "./components/sheet";
import StoreBar from "./components/store-bar";
import TopBar from "./components/top-bar";
import ZeroSearch from "./components/zero-search";

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBar />
      <StoreBar />
      <FilterBar />
      <ZeroSearch />
      <SuggestionsSheet />
      <AppBar />
    </div>
  );
};

export default App;
