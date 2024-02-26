
import React, { useState } from "react";
import Categories from "../Components/Categories/Categories";
import Popular from "../Components/Popular/Popular";
import Footer from "../Components/Footer/Footer";
import Searchbar from "../Components/Searchbar/Searchbar";


function Women() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <Categories />
      <Popular searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default Women;






















