"use client";

import { Button } from "@/components/ui/button";
import { List, ListItem, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/admin/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); // Log success response
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error: any) {
      // Handle full error and log to understand the issue
      console.error("Error:", error.response || error.message);
      const message = error.response?.data?.message || "Error signing up";
      alert(message);
    }
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      gap={"16px"}
      mt={"100px"}
      mb={"100px"}
    >
      <Typography color="text" fontSize={"24px"} fontWeight={"600"}>
        Бүртгүүлэх
      </Typography>
      <Stack gap={4} sx={{ width: "334px" }}>
        <form onSubmit={handleSubmit} className="text-white mt-[200px]">
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
        </form>
        <List disablePadding sx={{ listStyleType: "disc", marginLeft: "20px" }}>
          <ListItem
            disablePadding
            sx={{
              display: "list-item",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#71717A",
            }}
          >
            Том, жижиг үсэг, тоо, тэмдэгт орсон байх
          </ListItem>
        </List>
        <Button
          onClick={handleSubmit}
          className="bg-blue-600 w-[175px] hover:bg-blue-700 h-[36px] rounded-2xl"
        >
          Үнэлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;
