import { CONTRACT } from "../utils/constants";
import { prepareContractCall } from "thirdweb";
import { TransactionButton } from "thirdweb/react";

interface AcardProps {
  index: number;
  name: string;
  desc: string;
  votes: string;
}

export const Acards: React.FC<AcardProps> = ({ index, name, desc, votes }) => {
  const handleTransactionA = () => {
    try {
      const indexBigIntA = BigInt(index); // Explicitly convert index to BigInt
      console.log("Preparing transaction for Agenda index:", indexBigIntA);
      return prepareContractCall({
        contract: CONTRACT,
        method: "voteAgenda",
        params: [indexBigIntA], // Ensure params include the BigInt index
      });
    } catch (error) {
      console.error("Error preparing transaction:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-between items-center gap-10 border-[1px] border-white p-8 rounded-xl min-w-[80vw]">
      <div className="flex flex-col flex-wrap justify-center align-middle gap-4 ">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p>{desc}</p>
        <p>Votes: {votes}</p>
      </div>
      <TransactionButton
        transaction={handleTransactionA}
        onTransactionSent={() => alert("Vote sending!")}
        onTransactionConfirmed={() => alert("Vote confirmed!")}
        onError={(error) => {
          console.error("Transaction error:", error);
          alert("Transaction error: " + error.message);
        }}
        className="py-4 px-12 border-none bg-white text-black text-lg font-bold rounded-full"
      >
        Vote
      </TransactionButton>
    </div>
  );
};
