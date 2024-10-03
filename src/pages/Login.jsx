import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="min-h-svh w-full flex justify-center items-center bg-dashboard bg-no-repeat bg-center p-6">
      <div className="flex flex-col  items-center justify-center gap-5 lg:gap-6 bg-[#181a1cd7] basis-[529px] p-6 rounded-xl ">
        <img
          src="/assets/icons/logo.svg"
          alt="chill logo"
          className="min-w-32 lg:min-w-40"
        />
        <form className="flex flex-col gap-5 lg:gap-6 w-full">
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
            <Input id="email" type="email" placeholder="Masukkan username" />
          </div>
          <div>
            <div className="relative">
              <label htmlFor="email" className="text-white lg:text-lg">
                Kata Sandi
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Masukkan kata sandi"
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
            <Button variant="secondary">
              <Link to="/home">Masuk</Link>
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
