const AdminPanel = () => {
  console.log("admin panel");
  return (
    <section>
      <header className="shadow-md">
        <nav className="w-3/4 mx-auto flex justify-between items-center py-5 ">
          <h1 className="text-3xl font-bold">
            Chill <span>Movie</span>
          </h1>
          <ul className="flex items-center gap-4 font-medium ">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="bg-red-500 hover:bg-red-400 rounded-md px-2 py-1 text-white cursor-pointer">
              Logout
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1 className="text-3xl font-bold text-center my-4">
          Movie & Series List
        </h1>
        <div className="w-3/4 mx-auto flex justify-end mb-2">
          <button className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md">
            Add Product <img src="assets/icons/file-plus.svg" alt="file plus" />
          </button>
        </div>
        <form className="w-3/4 mx-auto my-5 flex flex-col items-center">
          <fieldset className="flex flex-col gap-2 w-96">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Masukkan title film"
              className="border border-gray-300 rounded-md p-2"
            />
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              placeholder="Masukkan tipe film"
              className="border border-gray-300 rounded-md p-2"
            />
            <label htmlFor="episode">Episode</label>
            <input
              type="text"
              name="type"
              placeholder="Masukkan episode film"
              className="border border-gray-300 rounded-md p-2"
            />
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              name="tag"
              placeholder="Masukkan tag film"
              className="border border-gray-300 rounded-md p-2"
            />
            <button className="text-center bg-red-500 hover:bg-red-400 text-white p-2 mt-2 rounded-md">
              Add Film
            </button>
          </fieldset>
        </form>
        <table className="table-auto border-collapse shadow-md text-center w-3/4 mx-auto">
          <thead>
            <tr className="bg-zinc-100">
              <th>Id</th>
              <th className="p-3 font-medium">Title</th>
              <th className=" p-3 font-medium">Type</th>
              <th className=" p-3 font-medium">Episode</th>
              <th className=" p-3 font-medium">Tag</th>
              <th className=" p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-zinc-50">
              <td>2e4ad-a5176-31273</td>
              <td className="p-3">Doctor Strange: Multiverse of Madness</td>
              <td className="p-3">Movie</td>
              <td className="p-3 font-bold">-</td>
              <td className="p-3 ">Multiverse, Mystical Arts, Supernatural</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminPanel;
