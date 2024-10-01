const Dashboard = () => {
  return (
    <section className="min-h-svh w-full bg-dashboard bg-no-repeat bg-center bg-cover flex flex-col p-5 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      <nav className="w-full flex justify-between items-center ">
        <img
          src="/assets/icons/logo.svg"
          alt="chill movie streaming logo"
          className="min-w-28 sm:min-w-32 md:min-w-36"
        />
        <button className="bg-red-500 py-1 px-4 rounded-md font-semibold hover:opacity-85">
          Sign in
        </button>
      </nav>
      <main className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold text-center mb-4 md:text-4xl lg:text-5xl">
          Create unforgettable moments. Watch together now!
        </h1>
        <button className="bg-red-500 py-1 px-4 rounded-md font-semibold hover:opacity-85">
          Get started
        </button>
      </main>
    </section>
  );
};
export default Dashboard;
