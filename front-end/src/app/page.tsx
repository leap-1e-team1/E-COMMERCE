"use client";
import { toast, ToastContainer } from "react-toastify"; // Correct import for both
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const sendEmail = async () => {
    try {
      await axios.get("http://localhost:8000");
      toast.success("Successfully sent email", { toastId: "success1" });
    } catch (err) {
      toast.error("Something went wrong", { toastId: "error1" });
    }
  };

  return (
    <div>
      <button className="border p-2" onClick={sendEmail}>
        Email sender
      </button>
      <ToastContainer />
    </div>
  );
}
