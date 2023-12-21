// useAuth.js
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verificar se as credenciais estão salvas no localStorage
  useEffect(() => {
    const savedCredentials = localStorage.getItem('credentials');
    if (savedCredentials) {
      const { matricula, senha } = JSON.parse(savedCredentials);
      // Se as credenciais estiverem definidas, não faça a verificação automática ao carregar o aplicativo
      return;
    }
  }, []);

  const login = (matricula, senha) => {
    const simulatedUser = {
      matricula: 'usuario1223',
      senha: 'senha1223',
    };

    if (matricula === simulatedUser.matricula && senha === simulatedUser.senha) {
      // Se as credenciais estiverem corretas, defina o usuário
      setUser(simulatedUser);

      // Salvar as credenciais no localStorage
      localStorage.setItem('credentials', JSON.stringify({ matricula, senha }));
    } else {
      
      setUser(null);
      console.log("ERRO")
    }
  };

  const logout = () => {
    // Limpe o estado do usuário e as credenciais salvas
    setUser(null);
    localStorage.removeItem('credentials');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
