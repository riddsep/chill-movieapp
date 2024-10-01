import Input from "../components/Input";
import Button from "../components/Button";
const Login = () => {
  return (
    <section className="min-h-svh w-full flex justify-center items-center bg-dashboard bg-no-repeat bg-center p-6">
      <div className="flex flex-col  items-center justify-center gap-5 bg-[#181a1cd7] basis-[529px] p-6 rounded-lg ">
        <img
          src="/assets/icons/logo.svg"
          alt="chill logo"
          className="min-w-32 lg:min-w-40"
        />
        <form className="flex flex-col gap-5 w-full">
          <div>
            <h1 className="text-2xl text-white font-bold text-center">Masuk</h1>
            <p className="text-white text-center">Selamat datang kembali!</p>
          </div>
          <div>
            <label htmlFor="email" className="text-white">
              Username
            </label>
            <Input id="email" type="email" placeholder="Masukkan username" />
          </div>
          <div>
            <label htmlFor="email" className="text-white">
              Kata Sandi
            </label>
            <Input id="email" type="email" placeholder="Masukkan kata sandi" />
            <p className="text-white text-xs flex justify-between mt-2">
              <span>
                <span className="text-[#C1C2C4] mr-1">Belum punya akun?</span>
                Daftar
              </span>{" "}
              Lupa kata sandi?{" "}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Button variant="secondary">Masuk</Button>
            <p className="text-[#C1C2C4] text-center text-xs">Atau</p>
            <Button
              variant="secondaryOutline"
              addition="flex justify-center items-center gap-1"
            >
              {" "}
              <img
                src="/assets/icons/google-icon.svg"
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
