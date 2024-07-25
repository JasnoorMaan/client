"use client";

import { useActiveAccount, useReadContract } from "thirdweb/react";
import { Cards } from "./Cards";
import { CONTRACT } from "../utils/constants";

export const VotingArea = () => {
  const account = useActiveAccount();
  const {
    data: candidates,
    isLoading: candidateLoad,
    error,
  } = useReadContract({
    contract: CONTRACT,
    method: "getAllVotesOfCandiates",
  });

  const { data: time, isLoading: timeLoad } = useReadContract({
    contract: CONTRACT,
    method: "getRemainingTime",
  });

  if (candidateLoad) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error loading candidates:", error);
    return <div>Error loading candidates.</div>;
  }

  // Log candidates to verify data structure
  console.log("Candidates data:", candidates);

  // Check if candidates are fetched and in correct format
  if (!candidates || !Array.isArray(candidates)) {
    return <div>No candidates found.</div>;
  }

  // Handle BigInt time conversion
  const remainingTimeInDays = time ? Number(time) / 1440 : 0;

  return (
    <div className="flex flex-col justify-center align-middle m-4 gap-8">
      <h1 className="text-6xl font-bold text-center p-6">Ongoing Elections</h1>
      {timeLoad ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <p className="text-center">
          Time Remaining: {remainingTimeInDays.toFixed(2)} hours
        </p>
      )}

      {account ? (
        <div className="flex flex-wrap justify-center align-middle gap-8">
          {candidates.map((candidate, index) => {
            const name = candidate.name;
            const votes = candidate.voteCount;

            // Ensure votes is a valid number
            const votesString = votes !== undefined ? votes.toString() : "0";

            return (
              <Cards
                key={index}
                index={index}
                name={name}
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
