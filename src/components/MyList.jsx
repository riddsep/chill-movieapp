import dataset from "../data/new-release.js";
const MyList = () => {
  const myFilm = dataset.map((data) => {
    return (
      <div className="w-full min-h-[145px]" key={data.id}>
        <img
          src={data.imageURL}
          alt={data.title}
          className="w-full h-full object-cover object-center rounded text-white"
        />
      </div>
    );
  });
  return (
    <section className="w-full bg-[#212121] px-5 pt-5 pb-10 lg:p-20">
      <h1 className="text-white text-xl mb-4 lg:text-3xl font-bold">
        Daftar Saya
      </h1>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {myFilm}
      </div>
    </section>
  );
};

export default MyList;
