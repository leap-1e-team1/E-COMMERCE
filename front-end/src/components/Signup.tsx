"use client";
import { useUser } from "@/provider/UserProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomButton } from "./Button";
import { Input } from "./Input";
import { Typography, Stack, List, ListItem } from "@mui/material";

const Signup: React.FC = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const router = useRouter();

  const { isLoggedIn } = useUser();

  const handleSubmit = async () => {
    try {
      if (password !== rePassword) {
        alert("Нууц үг таарахгүй байна!");
        return;
      }
      await axios.post("http://localhost:8000/signup", {
        username,
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
    <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {isSignedUp && (
        <div className="mt-[108px]">
          <p>Signed up successfully!</p>
        </div>
      )}
      {!isSignedUp && (
        <form className="mt-[108px]" onSubmit={handleSubmit}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontFamily: "Inter",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            color="primary"
          >
            Нууц үг сэргээх
          </Typography>
          <Stack
            sx={{
              width: "334px",
              color: "#71717A",
              fontSize: 14,
              fontFamily: "Inter",
              marginBottom: "16px",
              fontWeight: 400,
              gap: "16px",
            }}
          >
            <Input
              name="Name"
              label="Нэр"
              type="text"
              placeholder=""
              helperText=""
              sx=""
              value={username}
              inputHandler={(e) => setUserName(e.target.value)}
            />
            <Input
              name="Email"
              label="Имэйл хаяг"
              type="text"
              placeholder=""
              helperText=""
              sx=""
              value={email}
              inputHandler={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              label="Нууц үг"
              type="password"
              placeholder=""
              helperText=""
              sx=""
              value={password}
              inputHandler={(e) => setPassword(e.target.value)}
            />
            <Input
              name="Re-password"
              label="Нууц үг давтах"
              type="password"
              placeholder=""
              helperText=""
              sx=""
              value={rePassword}
              inputHandler={(e) => setRePassword(e.target.value)}
            />
          </Stack>

          <List disablePadding sx={{ listStyleType: "disc", marginBottom: "16px", marginTop: "16px", marginLeft: "20px" }}>
            <ListItem disablePadding sx={{ display: "list-item", fontSize: "12px", fontWeight: "400", lineHeight: "20px", color: "#71717A" }}>
              Том үсэг орсон байх
            </ListItem>
            <ListItem disablePadding sx={{ display: "list-item", fontSize: "12px", fontWeight: "400", lineHeight: "20px", color: "#71717A" }}>
              Жижиг үсэг орсон байх
            </ListItem>
            <ListItem disablePadding sx={{ display: "list-item", fontSize: "12px", fontWeight: "400", lineHeight: "20px", color: "#71717A" }}>
              Тоо орсон байх
            </ListItem>
            <ListItem disablePadding sx={{ display: "list-item", fontSize: "12px", fontWeight: "400", lineHeight: "20px", color: "#71717A" }}>
              Тэмдэгт орсон байх
            </ListItem>
          </List>

          <Stack
            sx={{
              width: "334px",
              color: "#FAFAFA",
              fontSize: 14,
              fontFamily: "Inter",
              fontWeight: 500,
            }}
          >
            <CustomButton
              text="Үүсгэх"
              textColor="white"
              hoverColor="black"
              height="36px"
              border="secondary.main"
              bgColor="secondary.main"
              handleClick={handleSubmit}
            />
          </Stack>
        </form>
      )}
    </Stack>
  );
};

export default Signup;
