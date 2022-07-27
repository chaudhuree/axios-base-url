import movieApi from "./movieApi";
import { APIKey } from "./movieApiKey";

const gertMovie = async ()=>{
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
    }
