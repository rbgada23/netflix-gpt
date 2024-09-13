import React from "react";
import lang from "./languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const currentLanguage = useSelector(store=>store.config.lang)
  return (
    <div className="pt-[10%] ">
      <form className="w-1/2 bg-black grid grid-cols-12 mx-auto rounded-lg">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 rounded-lg py-2 px-4 bg-red-700 text-white">{lang[currentLanguage].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
