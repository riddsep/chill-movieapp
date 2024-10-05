import Button from "./Button";

const Profile = () => {
  return (
    <section className="bg-[#212121] p-5">
      <div>
        <div className="flex flex-col gap-5 bg-[#3D4142] p-6 rounded-xl">
          <div className="flex gap-5">
            <img
              src="/assets/icons/warning.svg"
              alt="warning"
              className="w-20"
            />
            <p className="text-white text-sm">
              Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
              Kamu!
            </p>
          </div>
          <div className="flex justify-end">
            <Button variant="secondaryOutline" addition={"text-xs font-bold"}>
              Mulai Berlangganan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
