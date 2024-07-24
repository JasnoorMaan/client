import { CONTRACT } from "@/utils/constants";
import { prepareContractCall } from "thirdweb";
import { TransactionButton } from "thirdweb/react";

// Define the interface for the props
interface CardProps {
  index: number; // Assuming index is a number, update if necessary
  name: string;
  votes: string;
}

export const Cards: React.FC<CardProps> = ({ index, name, votes }) => {
  const handleTransaction = () => {
    try {
      const indexBigInt = BigInt(index); // Explicitly convert index to BigInt
      console.log("Preparing transaction for candidate index:", indexBigInt);
      return prepareContractCall({
        contract: CONTRACT,
        method: "vote",
        params: [indexBigInt], // Ensure params include the BigInt index
      });
    } catch (error) {
      console.error("Error preparing transaction:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-start items-center gap-4 border-[1px] min-w-[33vw] border-white p-8 rounded-xl">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p>Votes: {votes}</p>
      <TransactionButton
        transaction={handleTransaction}
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
