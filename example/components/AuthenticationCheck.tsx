import { useSession, SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface AuthenticationCheckProps {
  children: ReactNode;
}

const AuthenticationCheck: React.FC<AuthenticationCheckProps> = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    // Redirecione para a página de login ou exiba uma mensagem de erro, se necessário
    router.push("/login-user");
    return null;
  }

  return <>{children}</>;
};

export default AuthenticationCheck;
