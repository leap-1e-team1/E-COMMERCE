"use client";
import { useUser } from "@/provider/UserProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const router = useRouter();

  const { isLoggedIn } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/signup", {
        firstName,
        lastName,
        email,
        password,
      });

      setIsSignedUp(true);

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error: any) {
      const message = error.response?.data?.message || "Error signing up";
      alert(message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  });

  return (
    <div>
      {isSignedUp && (
        <div className="mt-[200px]">
          <p>Signed up successfully!</p>
        </div>
      )}
      {!isSignedUp && (
        <form className="mt-[200px]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
