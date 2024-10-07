import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userData = JSON.parse(localStorage.getItem("user")) || [];

  const handlerSubmit = (e) => {
    e.preventDefault();
    const findUser = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (!username || !password) {
      return Swal.fire({
        html: "Username sama password nya di isi dulu bray!",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top",
        width: 300,
      });
    }
    if (!findUser) {
      return Swal.fire({
        html: "Username atau password ga cocok bray",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top",
        width: 300,
      });
    }
    localStorage.setItem("currentUser", JSON.stringify(findUser));
    Swal.fire({
      html: "Welcome!",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
      width: 300,
    });

    navigate("/home");
  };

  return (
    <section className="min-h-svh w-full flex justify-center items-center bg-dashboard bg-no-repeat bg-center p-6">
      <div className="flex flex-col  items-center justify-center gap-5 lg:gap-6 bg-[#181a1cd7] basis-[529px] p-6 rounded-xl ">
        <img
          src="/assets/icons/logo.svg"
          alt="chill logo"
          className="min-w-32 lg:min-w-40"
        />
        <form
          className="flex flex-col gap-5 lg:gap-6 w-full"
          onSubmit={handlerSubmit}
        >
          <div>
            <h1 className="text-2xl lg:text-3xl text-white font-bold text-center">
              Masuk
            </h1>
            <p className="text-white text-center">Selamat datang kembali!</p>
          </div>
          <div>
            <label htmlFor="email" className="text-white lg:text-lg">
              Username
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <div className="relative">
              <label htmlFor="password" className="text-white lg:text-lg">
                Kata Sandi
              </label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <div onClick={() => setShowPassword(!showPassword)}>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white absolute right-3 bottom-2.5 w-5 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              ) : (
                <div onClick={() => setShowPassword(!showPassword)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 absolute right-3 bottom-2.5 w-5 cursor-pointer text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className="text-white text-xs flex justify-between mt-2 md:text-sm">
              <span>
                <span className="text-[#C1C2C4] mr-1">Belum punya akun?</span>
                <Link to="/register" className="cursor-pointer">
                  Daftar
                </Link>
              </span>{" "}
              <span className="cursor-pointer">Lupa kata sandi?</span>{" "}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Button variant="secondary" type="submit">
              Masuk
            </Button>
            <p className="text-[#C1C2C4] text-center text-xs md:text-sm">
              Atau
            </p>
            <Button
              variant="secondaryOutline"
              addition="flex justify-center items-center gap-1"
            >
              {" "}
              <img
                src="./assets/icons/google-icon.svg"
                alt=""
                className="w-4"
              />{" "}
              Masuk dengan Google
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
