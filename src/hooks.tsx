import { useCallback, useEffect, useState } from "react";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

interface Result {
    data: Post[]
    isLoading: boolean
    isError: boolean
}

export const useCallApi = (apiURL: string): Result => {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);


    const getData = useCallback(
        async ()  => {
            try {
                const response = await fetch(apiURL);
                const jsonData = await response.json();
                setData(jsonData)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setIsError(true)
            }
    
        },
        [apiURL]
      );



    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        getData()
    }, [getData])

  
   return {
    data,
    isLoading,
    isError
   }
  };
  