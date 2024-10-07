import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      return setError("Form nya di isi dulu bray!");
    }
    if (password.length < 8) {
      return setError("Password nya minimal 8 karakter bray!");
    }

    if (password !== confirmPassword) {
      return setError("Password nya ga cocok bray!");
    }

    const users = JSON.parse(localStorage.getItem("user")) || [];
    const isEmailRegistered = users.some((user) => user.username === username);

    if (isEmailRegistered) {
      return setError("Pake email lain bray");
    }

    const newUser = [...users, { username, password }];

    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/login");

    Swal.fire({
      html: "Account created successfully!",
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top",
      width: 300,
    });

    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setError("");
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
              Daftar
            </h1>
            <p className="text-white text-center">Selamat datang!</p>
            {error && (
              <p className="text-center text-red-500 italic">{error}</p>
            )}
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
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
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
                <div
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
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
            <p className="text-white text-xs  mt-2 md:text-sm">
              <span className="text-[#C1C2C4] mr-1">Sudah punya akun?</span>
              <Link to="/login" className="cursor-pointer">
                Login
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <Button variant="secondary" type="submit">
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
