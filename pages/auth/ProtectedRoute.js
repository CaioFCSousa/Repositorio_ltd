// ProtectedRoute.js
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  // Use useEffect to ensure router.push is called on the client side
  useEffect(() => {
    // Verifique se o usuário está autenticado
    if (!user) {
      // Recupere as credenciais do localStorage
      const savedCredentials = localStorage.getItem('credentials');

      if (savedCredentials) {
        const { matricula, senha } = JSON.parse(savedCredentials);

        // Substitua a seguinte lógica pelas suas próprias verificações de autenticação
        if (matricula === 'usuario123' && senha === 'senha123') {
          return; // Usuário autenticado
        }
      }

      // Redirecione para a página de login se não estiver autenticado
      router.push('/login-user');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
