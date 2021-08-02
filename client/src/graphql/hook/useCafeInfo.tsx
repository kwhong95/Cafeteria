import { useQuery, gql} from "@apollo/client"
import { useEffect, useState } from "react";

const GET_CAFEINFO = gql`
  query {
    cafeInfo {
      id
      name
      region
      address
      contact
    }
  }
`;

export function useCafeInfo () {
  const { data, error, loading } = useQuery(GET_CAFEINFO)
  const [cafeInfo, setCafeInfo] = useState([])

  useEffect(() => {
    if (data) {
      setCafeInfo(data.cafeInfo)
    }
  }, [data])

  return { cafeInfo }
}