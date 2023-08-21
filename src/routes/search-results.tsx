import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/app-bar";
import FilterBar from "../components/filter-bar";
import SuggestionsSheet from "../components/sheet";
import StoreBar from "../components/store-bar";
import TopBar from "../components/top-bar-static";
import ZeroSearch from "../components/zero-search";

const SearchResults = () => {
  const navigate = useNavigate();

  const handleBackClick = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <TopBar onBackClick={handleBackClick} />
      <StoreBar />
      <FilterBar />
      <ZeroSearch />
      <SuggestionsSheet />
      <AppBar />
    </>
  );
};

export default SearchResults;
