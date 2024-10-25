"use client";

import {
  Box,
  Stack,
  ImageList,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CustomButton } from "./Button";
import { Fragment, useState } from "react";
import Modal from "@mui/material/Modal";

export const SettingsComp = () => {
  const [storeType, setStoreType] = useState();

  const [deliveryType, setdeliveryType] = useState("");
  const [firstProduct, setFirstProduct] = useState("");

  const settingsList: { list: string; btn: string }[] = [
    {
      list: "Дэлгүүрийн төрлөө оруулна уу",
      btn: "Дэлгүүрийн төрөл",
    },
    { list: "Баннер зураг", btn: "солих" },
    {
      list: "Эхний бүтээгдэхүүнээ нэмнэ үү",
      btn: "Бүтээгдэхүүн нэмэх",
    },
    {
      list: "Хүргэлтийг тохируулна уу",
      btn: "Хүргэлтийг тохируулна уу",
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 551,
    height: 341,
    bgcolor: "background.paper",
    boxShadow: "none",
    border: "0",
    borderRadius: "12px",
    py: "24px",
    px: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  type modalProps = {
    btn: string;
    list: string;
  };

  function ChildModal({ btn, list }: modalProps) {
    const [open, setOpen] = useState(false);

    const [storeTypeChange, setStoreTypeChange] = useState();

    const [invalidInput, setInvalidInput] = useState("");

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleSaveClose = () => {
      if (storeTypeChange) {
        setStoreType(storeTypeChange);
        setOpen(false);
      } else {
      }
    };

    const handleChangeStore = (e: any) => {
      setStoreTypeChange(e);
    };

    return (
      <Fragment>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "background.paper",
            py: "8px",
            px: "16px",
            fontSize: "14px",
            fontWeight: "600",
            height: "36px",
            borderColor: "#D6D8DB",
            borderRadius: "8px",
          }}
          onClick={handleOpen}
        >
          {btn}
        </Button>
        {list === "Дэлгүүрийн төрлөө оруулна уу" ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <Box sx={style}>
              <Stack gap={"12px"}>
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?
                </Typography>
                <TextField
                  onChange={(e) => {
                    handleChangeStore(e.target.value);
                  }}
                  sx={{ borderColor: "" }}
                  fullWidth
                  label={list}
                  id={list}
                />
                <Typography
                  sx={{ fontWeight: "400", color: "#5E6166", fontSize: "14px" }}
                >
                  Жишээ нь: Хувцасны дэлгүүр / Жич: Та үүнийг хүссэн үедээ
                  өөрчилж болно./
                </Typography>
                <Typography
                  sx={{ fontWeight: "400", color: "#5E6166", fontSize: "10px" }}
                ></Typography>
              </Stack>
              <Stack flexDirection={"row"} justifyContent={"end"} gap={"8px"}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "background.paper",
                    py: "8px",
                    px: "16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    height: "36px",
                    borderColor: "#D6D8DB",
                    borderRadius: "8px",
                  }}
                  onClick={handleClose}
                >
                  Цуцлах
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "#121316",
                    py: "8px",
                    px: "16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    height: "36px",
                    borderColor: "#D6D8DB",
                    borderRadius: "8px",
                    color: "#ffffff",
                  }}
                  onClick={handleSaveClose}
                >
                  Хадгалах
                </Button>
              </Stack>
            </Box>
          </Modal>
        ) : (
          ""
        )}
      </Fragment>
    );
  }

  return (
    <Box bgcolor={"background.paper"} sx={{ width: "100%" }}>
      <Stack
        flexDirection={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "25px",
          marginTop: "5%",
        }}
      >
        <Stack
          bgcolor={"primary.contrastText"}
          flexDirection={"column"}
          sx={{
            width: "729px",
            borderRadius: "10px",
            display: "flex",
            paddingY: "16px",
            paddingX: "24px",
            ml: "15%",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Тохиргоо
          </Typography>
          {settingsList.map(({ list, btn }, index) => {
            return (
              <Stack
                key={index}
                direction={"row"}
                sx={{
                  px: "12px",
                  py: "8px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "background.paper",
                  borderRadius: "8px",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>{list}</Typography>
                <ChildModal btn={btn} list={list} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};
