import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, loginWithEmailAndPassword, user, logout } = useAuthContext();

  const handleLogin = () => {
    loginWithEmailAndPassword("test@example.com", "password");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {isChecking ? (
        <h2>Checking authentication...</h2>
      ) : isAuthenticated ? (
        <>
          <h2>Bienvenido de vuelta! {user?.name}</h2>

          <button
            type="button"
            className="bg-indigo-600 text-white w-sm rounded-sm cursor-pointer mt-3"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <h2>Por favor inicia sesion</h2>

          <button
            type="button"
            className="bg-indigo-600 text-white w-sm rounded-sm cursor-pointer mt-3"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </>
      )}
    </>
  );
};
