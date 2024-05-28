import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { mainUrl } from "../constant/config";

export const useSingup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const singup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    

    const res = await fetch(`${mainUrl}api/user/singup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { singup, isLoading, error };
};