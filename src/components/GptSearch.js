import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <img
          className="w-full"
          src={BG_URL}
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/US-en-20240909-TRIFECTA-perspective_e4cccf9e-e51c-4a90-af6d-001c59af27e7_large.jpg"
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
