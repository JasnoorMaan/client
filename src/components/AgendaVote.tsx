"use client";

import { useActiveAccount, useReadContract } from "thirdweb/react";

import { CONTRACT } from "../utils/constants";
import { Acards } from "./Acards";

export const AgendaVote = () => {
  const account = useActiveAccount();

  const {
    data: agendas,
    isLoading: agendaLoad,
    error,
  } = useReadContract({
    contract: CONTRACT,
    method: "getAllAgendas",
  });

  if (agendaLoad) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error("Error loading Agendas:", error);
    return <div>Error loading Agendas.</div>;
  }
  console.log("Agendas data:", agendas);

  if (!agendas || !Array.isArray(agendas)) {
    return <div>No Agendas found.</div>;
  }

  // Handle BigInt time conversion
  // const remainingTimeInDays = time ? Number(time) / 1440 : 0;

  return (
    <div className="flex flex-col justify-center align-middle m-4 gap-8">
      <h1 className="text-6xl font-bold text-center p-6">Trending</h1>
      <p className="text-center">Votes for this week</p>

      {account ? (
        <div className="flex flex-wrap justify-center align-middle gap-8">
          {agendas.map((agenda, index) => {
            const name = agenda.name;
            const desc = agenda.desc;
            const votes = agenda.voteAgenda;

            const votesString = votes !== undefined ? votes.toString() : "0";

            return (
              <Acards
                key={index}
                index={index}
                name={name}
                desc={desc}
                votes={votesString}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center align-middle min-h-[60vh]">
          <h1 className="text-4xl font-bold text-center py-20">
            Please Sign In with Wallet
          </h1>
        </div>
      )}
    </div>
  );
};
