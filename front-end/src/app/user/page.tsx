"use client";

import { CustomButton } from "@/components/Button";
import { Stack, Typography, TextField } from "@mui/material";

const User = () => {
  return (
    <Stack
      justifyContent={"center"}
      direction={"row"}
      gap={"60px"}
      mt={"100px"}
      mb={"100px"}
    >
      <Stack direction={"column"} gap={"4px"}>
        <Typography
          fontSize={"14px"}
          py={2}
          px={4}
          fontWeight={"500"}
          bgcolor={"#FFFFFF"}
          borderRadius="9999px"
        >
          Хэрэглэгчийн хэсэг
        </Typography>
        <Typography fontSize={"14px"} py={2} px={4} fontWeight={"500"}>
          Захиалгын түүх
        </Typography>
      </Stack>
      <Stack gap={"16px"} direction={"column"}>
        <Typography fontSize={"18px"} fontWeight={"700"}>
          Хэрэглэгчийн хэсэг
        </Typography>
        <Stack sx={{ border: "1px solid #E4E4E7" }}></Stack>
        <Stack direction={"column"} gap={"20px"}>
          <Stack gap={"8px"}>
            <Typography fontSize={"14px"} fontWeight={"500"}>
              Овог:
            </Typography>
            <input
              type="text"
              style={{
                width: "620px",
                height: "28px",
                border: "1px solid #E4E4E7",
                borderRadius: "18px",
                paddingBlock: "12px",
                paddingInline: "4px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </Stack>
          <Stack gap={"8px"}>
            <Typography fontSize={"14px"} fontWeight={"500"}>
              Нэр:
            </Typography>
            <input
              type="text"
              style={{
                width: "620px",
                height: "28px",
                border: "1px solid #E4E4E7",
                borderRadius: "18px",
                paddingBlock: "12px",
                paddingInline: "4px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </Stack>
          <Stack gap={"8px"}>
            <Typography fontSize={"14px"} fontWeight={"500"}>
              Утасны дугаар:
            </Typography>
            <input
              type="text"
              style={{
                width: "620px",
                height: "28px",
                border: "1px solid #E4E4E7",
                borderRadius: "18px",
                paddingBlock: "12px",
                paddingInline: "4px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </Stack>
          <Stack gap={"8px"}>
            <Typography fontSize={"14px"} fontWeight={"500"}>
              Имэйл хаяг:
            </Typography>
            <input
              type="text"
              style={{
                width: "620px",
                height: "28px",
                border: "1px solid #E4E4E7",
                borderRadius: "18px",
                paddingBlock: "12px",
                paddingInline: "4px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </Stack>
          <Stack gap={"8px"}>
            <Typography fontSize={"14px"} fontWeight={"500"}>
              Хаяг:
            </Typography>
            <input
              type="text"
              style={{
                width: "620px",
                height: "28px",
                border: "1px solid #E4E4E7",
                borderRadius: "18px",
                paddingBlock: "12px",
                paddingInline: "4px",
                backgroundColor: "#FFFFFF",
              }}
            />
          </Stack>
        </Stack>
        <CustomButton
          text="Мэдээлэл шинэчлэх"
          textColor="background.paper"
          handleClick={() => console.log("Button clicked!")}
          bgColor="secondary.main"
          hoverColor="secondary.main"
          height="36px"
          border="secondary.main"
        />
      </Stack>
    </Stack>
  );
};

export default User;
