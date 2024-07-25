"use client";

import { client, myChain } from "@/utils/constants";
import Link from "next/link";
import { ConnectButton } from "thirdweb/react";

function Navbar() {
  return (
    <>
      <div className="flex flex-wrap justify-around items-center min-h-4">
        <div className="flex flex-row justify-center items-center p-4">
          <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
          >
            <div className="h-5 w-6 px-2 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
          </Link>
          <h1 className="text-3xl font-bold px-2">citizens</h1>
        </div>
        <div className="flex flex-wrap flex-row justify-center items-center gap-16 p-4">
          <Link href="/" className="">
            <h2 className="text-md font-semibold">Vote</h2>
          </Link>
          <Link href="/agendas" className="">
            <h2 className="text-md font-semibold">Agendas</h2>
          </Link>
        </div>
        <div className="p-2">
          <ConnectButton client={client} chain={myChain} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
