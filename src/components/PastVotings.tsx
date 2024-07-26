"use client";
import { Cards } from "./Cards";

export const PastVotings = () => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle m-4 gap-8">
        <h1 className="text-6xl font-bold text-center p-6">Past Elections</h1>
        <div className="flex flex-wrap justify-center align-middle gap-8">
          <Cards index={0} name="Labour Party" votes="450" />
          <Cards index={1} name="Conservative Party" votes="118" />
        </div>
      </div>
    </>
  );
};
