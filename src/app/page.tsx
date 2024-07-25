import Image from "next/image";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client, myChain } from "../utils/constants";
import Navbar from "../components/Navbar";
import { HeroVote } from "../components/HeroVote";
import { VotingArea } from "../components/VotingArea";
import { PastVotings } from "../components/PastVotings";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <HeroVote />
      <VotingArea />
      <PastVotings />
      <Footer />
    </>
  );
}
