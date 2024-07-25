"use client";
import React, { useState } from "react";
import { CONTRACT } from "../utils/constants";
import { prepareContractCall } from "thirdweb";
import { TransactionButton } from "thirdweb/react";

export const AddAgenda = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleTransaction = () => {
    try {
      return prepareContractCall({
        contract: CONTRACT,
        method: "addAgenda",
        params: [name, desc],
      });
    } catch (error) {
      console.error("Error preparing transaction:", error);
      throw error;
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 border-t-[1px] mt-20 border-gray-300 rounded-lg mx-12">
      <h1 className="text-5xl font-bold">Add your concerns</h1>
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-zinc-700 rounded bg-zinc-900 item-center min-w-[80%]"
      />
      <textarea
        placeholder="Describe your concern"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="p-2 border border-zinc-700 rounded bg-zinc-900 item-center min-w-[80%]"
      />
      <TransactionButton
        transaction={handleTransaction}
        onTransactionSent={() => console.log("Transaction sent!")}
        onTransactionConfirmed={() => {
          console.log("Transaction confirmed!");
          alert("Transaction confirmed!");
          setName(""); // Reset the form
          setDesc(""); // Reset the form
        }}
        onError={(error) => {
          console.error("Transaction error:", error);
          alert("Transaction error: " + error.message);
        }}
        className="py-2 px-4 bg-blue-500 text-white font-bold rounded"
      >
        Add
      </TransactionButton>
    </div>
  );
};

export default AddAgenda;
