"use client";
import { CustomButton } from "@/components/Button";
import { Input } from "@/components/Input";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <Stack
      gap={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "108px",
      }}
    >
      <Typography color="primary.main" sx={{ fontSize: "24px" }}>
        Нэвтрэх
      </Typography>

      <Stack
        gap={4}
        sx={{ width: "334px", display: "flex", justifyContent: "center" }}
      >
        <Input
          name=""
          label="Нэр"
          placeholder="Нэр"
          helperText=""
          inputHandler={() => {
            console.log();
          }}
        />
        <Input
          name=""
          label="Нууц үг"
          placeholder="Нууц үг"
          helperText=""
          inputHandler={() => {
            console.log();
          }}
        />
        <CustomButton
          text="Нэвтрэх"
          textColor="background.paper"
          handleClick={() => console.log("Button clicked!")}
          bgColor="secondary.main"
          hoverColor="primary.main"
          height="36px"
          border="secondary.main"
        />

        <Typography
          component="div"
          color="text.secondary"
          sx={{
            textAlign: "center",
          }}
        >
          Нууц үг мартсан
        </Typography>
      </Stack>

      <Link href={"./register"} style={{ textDecoration: "none" }}>
        <Stack sx={{ width: "334px" }}>
          <CustomButton
            text="Бүртгүүлэх"
            textColor="secondary.main"
            handleClick={() => {
              console.log("Button clicked!");
            }}
            bgColor="background.paper"
            hoverColor="primary.main"
            height="36px"
            border="secondary.main"
          />
        </Stack>
      </Link>
    </Stack>
  );
}
