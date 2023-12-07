import useAuth from "./useAuth";

export default function useLogout() {
  const { setAuth } = useAuth();
  const logout = async () => {
    try {
      localStorage.setItem("token", "");
      setAuth({});
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
}
