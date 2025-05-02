import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  async function refreshToken() {
    try {
      //   const res = await api.post("/auth/refresh");
      //   setAccessToken(res.data.accessToken);
    } catch (err) {
      setAccessToken(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
