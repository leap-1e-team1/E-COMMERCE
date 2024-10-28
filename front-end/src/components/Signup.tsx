"use client";
import { useUser } from "@/provider/UserProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomButton } from "./Button";
import { Input } from "./Input";
import { Typography, Stack, List, ListItem } from "@mui/material";
import { toast } from "react-toastify"; // Import toast

const Signup: React.FC = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const router = useRouter();
  const { isLoggedIn } = useUser();

  // Password Requirements
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Update validation criteria
    setValidations({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      specialChar: /[!@#$%^&*]/.test(value),
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== rePassword) {
        toast.error("Нууц үг таарахгүй байна!");
        return;
      }
      await axios.post("https://e-commerce-t6c9.onrender.com/signup", {
        username,
        email,
        password,
      });

      toast.success("Амжилттай бүртгүүллээ!");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Бүртгүүлэхэд алдаа гарлаа";
      toast.error(message); // Use toast for errors
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  return (
    <Stack
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
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
            inputHandler={handlePasswordChange}
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

        <List
          disablePadding
          sx={{
            listStyleType: "disc",
            marginBottom: "16px",
            marginTop: "16px",
            marginLeft: "20px",
          }}
        >
          <ListItem
            disablePadding
            className={
              validations.uppercase ? "text-green-500" : "text-[#71717A]"
            }
            sx={{
              display: "list-item",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#71717A",
            }}
          >
            Том үсэг орсон байх
          </ListItem>
          <ListItem
            disablePadding
            className={
              validations.lowercase ? "text-green-500" : "text-[#71717A]"
            }
            sx={{
              display: "list-item",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#71717A",
            }}
          >
            Жижиг үсэг орсон байх
          </ListItem>
          <ListItem
            disablePadding
            className={validations.number ? "text-green-500" : "text-[#71717A]"}
            sx={{
              display: "list-item",
              sfontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#71717A",
            }}
          >
            Тоо орсон байх
          </ListItem>
          <ListItem
            disablePadding
            className={
              validations.specialChar ? "text-green-500" : "text-[#71717A]"
            }
            sx={{
              display: "list-item",
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#71717A",
            }}
          >
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
            handleClickVoid={handleSubmit}
          />
        </Stack>
      </form>
    </Stack>
  );
};

export default Signup;
