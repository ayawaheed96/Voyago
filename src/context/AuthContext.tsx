import { createContext, useState, useEffect, type ReactNode } from "react";
import { mockUsers } from "../assets/assets";

interface User {
  name: string;
  username: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (username: string, password: string) => {
    const found = mockUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      const newUser = {
        name: found.name,
        username: found.username,
        password: found.password,
      };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext };
