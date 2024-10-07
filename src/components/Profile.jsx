import Button from "./Button";
import MyList from "./MyList";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("currentUser"));
  console.log(userData);
  return (
    <>
      <section className="bg-[#212121] p-5 lg:py-10 lg:px-20">
        <div className="md:flex items-start md:gap-10 lg:gap-20">
          <div className="flex flex-col gap-5 bg-[#3D4142] p-6 rounded-xl basis-1/2 order-2">
            <div className="flex gap-5">
              <img
                src="/assets/icons/warning.svg"
                alt="warning"
                className="w-20"
              />
              <div>
                <h1 className="text-white lg:text-lg font-bold">
                  Saat ini anda belum berlangganan
                </h1>
                <p className="text-white text-sm">
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                  Kamu!
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                variant="secondaryOutline"
                addition={"text-xs lg:text-base font-bold"}
              >
                Mulai Berlangganan
              </Button>
            </div>
          </div>
          <div className="basis-1/2 order-1">
            <h1 className="text-white text-xl font-bold mb-6">Profil Saya</h1>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <img
                  src="/assets/icons/profile.svg"
                  alt="profile"
                  className="w-20"
                />
                <div>
                  <button className="text-[#3254FF] border border-[#3254FF] text-sm py-2 px-3 rounded-3xl font-bold mb-1">
                    Ubah Foto
                  </button>
                  <div className="flex items-center text-[#C4C4C4] text-xs">
                    <img
                      src="/assets/icons/file-upload-outline.svg"
                      alt=""
                      className="w-6"
                    />
                    Maksimal 2MB
                  </div>
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="username"
                  className="text-[#9D9EA1] text-sm absolute top-1 px-4"
                >
                  Nama Pengguna
                </label>
                <input
                  type="username"
                  id="username"
                  value="Rido Septiawan"
                  disabled
                  className="w-full bg-[#22282A] text-white text-base border border-gray-500/50 rounded px-4 pt-5 pb-2"
                />
                <img
                  src="/assets/icons/edit.svg"
                  alt=""
                  className="absolute right-0 bottom-1/2 translate-y-1/2 mr-3 cursor-pointer"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-[#9D9EA1] text-sm absolute top-1 px-4"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={userData.username}
                  disabled
                  className="w-full bg-[#22282A] text-white text-base border border-gray-500/50 rounded px-4 pt-5 pb-2"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="username"
                  className="text-[#9D9EA1] text-sm absolute top-1 px-4"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  id="password"
                  value={userData.password}
                  disabled
                  className="w-full bg-[#22282A] text-white text-base border border-gray-500/50 rounded px-4 pt-5 pb-2"
                />
                <img
                  src="/assets/icons/edit.svg"
                  alt=""
                  className="absolute right-0 bottom-1/2 translate-y-1/2 mr-3 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyList />
    </>
  );
};

export default Profile;
