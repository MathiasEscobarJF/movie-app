import { FilmIcon } from "@heroicons/react/24/outline";

async function Home(){
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome! Enter a title to search</h1>
        <FilmIcon className="w-80 text-violet-800 m-auto mt-8" />
      </div>
    </>
  );
}

export default Home;