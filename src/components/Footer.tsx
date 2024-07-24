import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="mt-20 pt-6 flex flex-col flex-wrap justify-center align-middle text-center gap-4 bg-zinc-900">
        <div className="flex flex-row flex-wrap justify-evenly align-middle">
          <div className="flex flex-row justify-center items-center px-4">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
            >
              <div className="h-5 w-6 px-2 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
            </Link>
            <h1 className="text-3xl font-bold px-2">citizens</h1>
          </div>
        </div>
        <p className="font-medium">
          Scalable, efficient, and safer elections around the world 🌍
        </p>
      </div>
      <div className="bg-zinc-900">
        <p className="font-light p-2 text-right ">
          Made with ❣️ on Polygon zkEVM Cardona by copy pasta
        </p>
      </div>
    </>
  );
};
