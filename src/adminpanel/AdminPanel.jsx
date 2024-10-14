import { useEffect, useState } from "react";
import {
  getMovies,
  insertMovie,
  deleteMovie,
  updateMovie,
} from "../services/api/movies-api-endpoints";

const AdminPanel = () => {
  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    type: "",
    episode: 0,
    premium: "",
    tag: "",
  });

  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleDelete(id) {
    if (confirm("Are you sure you want to delete this movie?")) {
      await deleteMovie(id);
      const macthingItem = moviesData.filter(
        (movieData) => movieData.id !== id
      );
      setMoviesData(macthingItem);
    }
  }
  function handleUpdate(movie) {
    setAdd(true);
    setFormData({
      id: movie.id,
      title: movie.title,
      type: movie.type,
      episode: movie.episode === null ? 0 : movie.episode,
      premium: movie.premium ? "true" : "false",
      tag: movie.tag.join(", "),
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        !formData.title ||
        !formData.type ||
        !formData.tag ||
        !formData.premium ||
        !formData.episode
      ) {
        alert("Semua data harus diisi.");
        return;
      }

      const movieData = {
        ...formData,
        episode: formData.episode === 0 ? null : formData.episode,
        premium: formData.premium === "true",
        tag: formData.tag.split(",").map((tag) => tag.trim()),
      };

      if (formData.id) {
        await updateMovie(movieData);
        alert("Film berhasil diperbarui.");
      } else {
        await insertMovie(movieData);
        alert("Film berhasil ditambahkan.");
      }

      setFormData({
        id: null,
        title: "",
        type: "",
        episode: 0,
        premium: "",
        tag: "",
      });

      await fetchMovies();
    } catch (error) {
      console.error("Error adding or updating movie:", error);
      alert("Gagal menambahkan atau memperbarui film. Silakan coba lagi.");
    }
  }

  async function fetchMovies() {
    try {
      setLoading(true);
      const result = await getMovies();
      setMoviesData(result);
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("Gagal mengambil data film. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section>
      <header className="shadow-md">
        <nav className="w-11/12 mx-auto flex justify-between items-center py-5 ">
          <h1 className="text-3xl font-bold">
            Chill <span className="text-red-500 text-2xl -ml-1">Movie</span>
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
        <div className="w-11/12 mx-auto flex justify-end mb-2">
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
              <label>Premium</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="premium"
                    value="true"
                    checked={formData.premium === "true"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="premium"
                    value="false"
                    checked={formData.premium === "false"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>

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
        <table className="table-auto border-collapse shadow-md text-center w-11/12 mx-auto mb-10">
          <thead>
            <tr className="bg-zinc-100">
              <th className="p-3 font-medium">Id</th>
              <th className="p-3 font-medium">Title</th>
              <th className=" p-3 font-medium">Type</th>
              <th className=" p-3 font-medium">Episode</th>
              <th className=" p-3 font-medium">Premium</th>
              <th className=" p-3 font-medium">Rating</th>
              <th className=" p-3 font-medium">Tag</th>
              <th className=" p-3 font-medium">Image URL</th>
              <th className=" p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              moviesData.map((movie) => (
                <tr className="odd:bg-white even:bg-zinc-100" key={movie.id}>
                  <td className="p-3">{movie.id}</td>
                  <td className="p-3">{movie.title}</td>
                  <td className="p-3">{movie.type}</td>
                  <td className="p-3 ">
                    {movie.type === "Movie" ? "-" : movie.episode}
                  </td>
                  <td className="p-3">{movie.premium ? "Premium" : "-"}</td>
                  <td className="p-3">{movie.rating}</td>
                  <td className="p-3">{movie.tag.join(", ")}</td>
                  <td className="p-3">{movie.image}</td>
                  <td className="p-3">
                    <div className="flex items-start">
                      <button onClick={() => handleUpdate(movie)}>
                        <img
                          src="assets/icons/pencil-1.svg"
                          alt=""
                          className="border border-black text-white p-2 rounded mr-2 hover:bg-blue-500 hover:border-blue-500"
                        />
                      </button>
                      <button onClick={() => handleDelete(movie.id)}>
                        <img
                          src="assets/icons/trash.svg"
                          alt=""
                          className="border border-black p-2 rounded hover:bg-red-500 hover:border-red-500"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {loading && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Loading ...
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;
