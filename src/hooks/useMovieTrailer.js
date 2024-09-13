import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) =>{
    //fetch trailer
  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => (video.type = "Trailer")
    );
    const trailer =
      filteredData.length !== 0 ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(()=>{
    getMoviesVideos();
  },[])
}

export default useMovieTrailer;