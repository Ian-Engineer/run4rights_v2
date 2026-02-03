import { createContext, useContext, useEffect, useState } from "react";
import api from "../../api";

type AuthContextType = {
  isAdmin: boolean;
  loading: boolean;
  refreshAuth: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  loading: true,
  refreshAuth: async () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const refreshAuth = async () => {
    setLoading(true);
    try {
        await api.getRequest("/admin/me").then((res) => {
            setIsAdmin(res.data.admin);
        }).catch(() => {
            setIsAdmin(false);
        });
    } catch (error) {
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAdmin, loading, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
