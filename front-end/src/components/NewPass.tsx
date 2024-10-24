"use client";
import { Typography, Stack, Box, List, ListItem } from "@mui/material";
import { CustomButton } from "./Button";
import { Input } from "./Input";

type NewPassComponentsPropsType = {
  continueHandler: () => void;
};

export default function NewPass({
  continueHandler,
}: NewPassComponentsPropsType) {
  const textStyles = {
    color: "#71717A",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: 400,
    lineHeight: "19.2px",
    wordWrap: "break-word",
    alignSelf: "stretch",
  };

  const clickHandler = async () => {
    // backend duudah
    continueHandler();
  };

  return (
    <Box sx={{ width: "334px", mx: "auto" }}>
      <Stack>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Inter",
              fontWeight: 600,
              marginBottom: "24px",
            }}
            color="primary"
          >
            Нууц үг сэргээх
          </Typography>
        </Stack>

        <Stack
          sx={{
            marginBottom: "16px",
            fontWeight: 400,
          }}
        >
          <Input
            name=""
            helperText=""
            placeholder=""
            label="Шинэ нууц үг"
            inputHandler={() => {
              console.log();
            }}
          />
        </Stack>

        <Stack
          sx={{
            marginBottom: "16px",
            fontWeight: 400,
          }}
        >
          <Input
            name=""
            helperText=""
            placeholder=""
            label="Шинэ нууц үг давтах"
            inputHandler={() => {
              console.log();
            }}
          />
        </Stack>

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
            Том үсэг орсон байх
          </ListItem>
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
            Жижиг үсэг орсон байх
          </ListItem>
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
            Тоо орсон байх
          </ListItem>
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
            Тэмдэгт орсон байх
          </ListItem>
        </List>

        <Stack
          sx={{
            marginTop: "16px",
            fontWeight: 500,
          }}
        >
          <CustomButton
            text="Илгээх"
            textColor="white"
            hoverColor="black"
            height="36px"
            border="secondary.main"
            bgColor="secondary.main"
            handleClick={clickHandler}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
