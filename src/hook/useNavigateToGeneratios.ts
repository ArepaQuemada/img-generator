import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Params = {
  [key: string]: string;
};

export const useNavigateToGenerations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const navigate = (params: Params) => {
    setIsLoading(true);
    router.push(
      `/generated-image?prompt=${params.prompt}&size=${params.option}`
    );
  };

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  return {
    isLoading,
    navigate,
  };
};
