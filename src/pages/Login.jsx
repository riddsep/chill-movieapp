import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
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
        position: "top-right",
        width: 300,
      });
    }
    if (!findUser) {
      return Swal.fire({
        html: "Username atau password ga cocok bray",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-right",
        width: 300,
      });
    }
    localStorage.setItem("currentUser", JSON.stringify(findUser));
    Swal.fire({
      html: "Welcome!",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-right",
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
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src="./assets/icons/hide-icon.svg"
                alt=""
                className="absolute right-3 bottom-2.5 w-5 cursor-pointer"
              />
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
