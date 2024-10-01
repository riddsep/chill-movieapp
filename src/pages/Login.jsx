import Input from "../components/Input";
const Login = () => {
  return (
    <section className="min-h-svh w-full flex justify-center items-center bg-dashboard bg-no-repeat bg-center  p-6">
      <div className="bg-[#181A1C] basis-[529px] p-6 rounded-md ">
        <img
          src="/assets/icons/logo.svg"
          alt="chill logo"
          className="min-w-32"
        />
        <div className="">
          <h1 className="text-2xl text-white font-bold">Masuk</h1>
          <p className="text-white">Selamat datang kembali!</p>
          <div>
            <label htmlFor="email" className="text-white">
              Username
            </label>
            <Input id="email" type="email" placeholder="Masukkan username" />
          </div>
          <div>
            <label htmlFor="email" className="text-white ">
              Kata Sandi
            </label>
            <Input id="email" type="email" placeholder="Masukkan kata sandi" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
