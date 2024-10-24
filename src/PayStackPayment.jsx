import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PaystackPayment = () => {
  const publicKey = ""; // Replace with your Paystack public key
  let totalPrice = 500;

  const [transactionHistory, setTransactionHistory] = useState([]);

  // State for user details (email, name)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Calculate the total price in kobo
  const amount = totalPrice * 100; // Convert NGN to kobo (Naira * 100)

  // Function to handle payment success
  const onSuccess = (reference) => {
    const transactionDate = new Date();
    const newTransaction = {
      amount, // You can also include other details like 'reference' from Paystack
      email,
      name,
      date: transactionDate.toLocaleString(), // Format the date as needed
    };
    setTransactionHistory((prevHistory) => [...prevHistory, newTransaction]);

    alert(`Payment successful! Reference: ${reference.reference}`);
    // console.log('Payment successful:', reference);
    console.log(componentProps);
  };

  // Function to handle when the payment modal is closed
  const onClose = () => {
    alert("Payment closed without completing.");
    console.log("Payment dialog closed");
  };
  // Paystack button properties
  const componentProps = {
    email,
    amount, // Using the dynamic totalPrice here
    publicKey,
    text: "Pay Now", // This will be the button text
    onSuccess,
    onClose,
    metadata: {
      name,
      email,
    },
  };

  return (
    <div className="p-6  mx-auto text-center font-sans border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Complete Your Payment
      </h2>

      {/* Inputs to capture user email and name */}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Displaying the dynamic total price */}
      <h3 className="text-xl font-medium text-gray-700 mb-4">
        Total Price: ₦{totalPrice}
      </h3>

      {/* Pay Now Button */}
      <PaystackButton
        {...componentProps}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
      />

      <div className="py-20 px-20">
        {transactionHistory?.map((transaction, index) => (
          <div key={index} className="grid grid-cols-4 gap-20">
            <div className="shadow px-10 py-5 rounded border">
              <h2>
                {" "}
                Amount Paid: <b className="font-bold">
                  {transaction.amount}
                </b>{" "}
              </h2>
            </div>

            <div className="shadow px-10 py-5 rounded border">
              <h2>
                {" "}
                Email: <b>{transaction.email}</b>{" "}
              </h2>
            </div>

            <div className="shadow px-10 py-5 rounded border">
              <h2>
                Name: <b> {transaction.name}</b>{" "}
              </h2>
            </div>

            <div className="shadow px-10 py-5 rounded border">
              Date: <b>{transaction.date}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaystackPayment;
