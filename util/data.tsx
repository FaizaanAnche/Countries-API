import axios from "axios";
import { Country } from "@/types/apiResponseTypes";

export async function getData(url:string) {
    const response = await axios.get<Country[]>(url);
    console.log(response);

    if (!response) {
        throw new Error("Failed to fetch data");
      }
    
      return response.data;
}