import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
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
              Daftar
            </h1>
            <p className="text-white text-center">Selamat datang!</p>
          </div>
          <div>
            <label htmlFor="email" className="text-white lg:text-lg">
              Username
            </label>
            <Input id="email" type="email" placeholder="Masukkan username" />
          </div>
          <div className="relative">
            <label htmlFor="password" className="text-white lg:text-lg">
              Kata Sandi
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Masukkan kata sandi"
            />
            <img
              src="./assets/icons/hide-icon.svg"
              alt=""
              className="absolute right-3 bottom-2.5 w-5 cursor-pointer"
            />
          </div>
          <div>
            <div className="relative">
              <label
                htmlFor="confirm-password"
                className="text-white lg:text-lg"
              >
                Konfirmasi Kata Sandi
              </label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Masukkan kata sandi"
              />
              <img
                src="./assets/icons/hide-icon.svg"
                alt=""
                className="absolute right-3 bottom-2.5 w-5 cursor-pointer"
              />
            </div>
            <p className="text-white text-xs  mt-2 md:text-sm">
              <span className="text-[#C1C2C4] mr-1">Sudah punya akun?</span>
              <Link to="/login" className="cursor-pointer">
                Login
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Button variant="secondary" onClick={() => navigate("/login")}>
              Daftar
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
              Daftar dengan Google
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Register;
