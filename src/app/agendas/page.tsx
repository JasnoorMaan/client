import { AgendaHero } from "../../components/AgendaHero";
import AgendaInput from "../../components/AgendaInput";
import { AgendaVote } from "../../components/AgendaVote";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <AgendaHero />
      <AgendaVote />
      <AgendaInput />
      <Footer />
    </>
  );
}
