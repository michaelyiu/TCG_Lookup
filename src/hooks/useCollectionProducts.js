import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCollectionProducts = (collectionId) => {
  const fetchAndParse = async () => {
    const response = await axios.get(
      `https://tcgcsv.com/tcgplayer/3/${collectionId}/products`,
    )

    return response.data.results
  }

  return useQuery({
    queryKey: ["collection-products", collectionId],
    queryFn: fetchAndParse,
    enabled: !!collectionId, // only runs if id exists
  })
}
