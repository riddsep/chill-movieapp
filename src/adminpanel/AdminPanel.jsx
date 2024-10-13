import { useState } from "react";

const AdminPanel = () => {
  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    episode: 0,
    tag: "",
  });
  console.log(formData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <section>
      <header className="shadow-md">
        <nav className="w-3/4 mx-auto flex justify-between items-center py-5 ">
          <h1 className="text-3xl font-bold">
            Chill <span className="text-red-500 text-2xl">Movie</span>
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
          <button
            className="flex items-center gap-2 bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md"
            onClick={() => {
              setAdd(!add);
            }}
          >
            Add Film <img src="assets/icons/file-plus.svg" alt="file plus" />
          </button>
        </div>
        {add && (
          <form
            className="w-3/4 mx-auto my-5 flex flex-col items-center"
            onSubmit={handleSubmit}
          >
            <fieldset className="flex flex-col gap-2 w-96">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Masukkan title film"
                className="border border-gray-300 rounded-md p-2"
                value={formData.title}
                onChange={handleChange}
              />
              <label htmlFor="type">Type</label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Masukkan tipe film"
                className="border border-gray-300 rounded-md p-2"
                value={formData.type}
                onChange={handleChange}
              />
              <label htmlFor="episode">Episode</label>
              <input
                type="number"
                name="episode"
                id="episode"
                placeholder="Masukkan episode film"
                className="border border-gray-300 rounded-md p-2"
                value={formData.episode}
                onChange={handleChange}
              />
              <label htmlFor="tag">Tag</label>
              <input
                type="text"
                name="tag"
                id="tag"
                placeholder="Masukkan tag film"
                className="border border-gray-300 rounded-md p-2"
                value={formData.tag}
                onChange={handleChange}
              />
              <button
                className="text-center bg-red-500 hover:bg-red-400 text-white p-2 mt-2 rounded-md"
                type="submit"
              >
                Add Film
              </button>
            </fieldset>
          </form>
        )}
        <table className="table-auto border-collapse shadow-md text-center w-3/4 mx-auto">
          <thead>
            <tr className="bg-zinc-100">
              <th>Id</th>
              <th className="p-3 font-medium">Title</th>
              <th className=" p-3 font-medium">Type</th>
              <th className=" p-3 font-medium">Episode</th>
              <th className=" p-3 font-medium">Rating</th>
              <th className=" p-3 font-medium">Tag</th>
              <th className=" p-3 font-medium">Image</th>
              <th className=" p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-zinc-50">
              <td className="p-3">2e4ad-a5176-31273</td>
              <td className="p-3">Doctor Strange: Multiverse of Madness</td>
              <td className="p-3">Movie</td>
              <td className="p-3 font-bold">-</td>
              <td className="p-3">4.5</td>
              <td className="p-3">Multiverse, Mystical Arts, Supernatural</td>
              <td className="p-3">
                <img
                  src="assets/trending/film-1.png"
                  alt=""
                  className="max-w-32"
                />
              </td>
              <td className="p-3">
                <div className="flex items-start">
                  <button>
                    <img
                      src="assets/icons/pencil-1.svg"
                      alt=""
                      className="border border-black text-white p-2 rounded mr-2 "
                    />
                  </button>
                  <button>
                    <img
                      src="assets/icons/trash.svg"
                      alt=""
                      className="border border-black text-white p-2 rounded mr-2 "
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminPanel;
