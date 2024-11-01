"use client";
import React, { ChangeEvent } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TableProduct from "./TableProduct";
import { useRouter } from "next/navigation";
import { ProductSearch } from "./ProductSearch";

export const ProductComp = () => {
  const [price, setPrice] = React.useState("");
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
  const router = useRouter();

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
    setDate(null);
    setValue("");
    setInputValue("");
  };

  const options = ["Hat", "Bottle", "T-shirt", "Hoodie", "Tee", "Bag"];
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    setPrice("");
    setDate(null);
    setValue("");
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col ml-6">
        <div className="text-sm flex flex-row gap-6 mt-4 ml-4">
          <h1>Бүтээгдэхүүн</h1>
          <h1>Ангилал</h1>
        </div>
        <div className=" border-b-2 w-screen mt-5 border-b-[#cfcfd9]"></div>
        <Stack sx={{ display: "flex", marginTop: "24px" }}>
          <Button
            onClick={() => {
              router.push("/admin/product/add-product");
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "#FFFFFF",
              bgcolor: "#121316",
              width: "280px",
              height: "48px",
              gap: "13px",
              borderRadius: "8px",
            }}
          >
            <img src="/add.png" alt="" />
            <p>Бүтээгдэхүүн нэмэх</p>
          </Button>
        </Stack>
        <div className="flex flex-row ">
          <div className="flex flex-row ">
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "13px",
                marginTop: "24px",
              }}
            >
              <div>
                <Autocomplete
                  value={value}
                  onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                    setDate(null);
                    setPrice("");
                    setInputValue("");
                  }}
                  id="controllable-states-demo"
                  options={options}
                  sx={{ width: 160, marginTop: "4px" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Ангилал" />
                  )}
                />
              </div>
              <Box sx={{ minWidth: "140px" }}>
                <FormControl sx={{ width: "140px", marginTop: "4px" }}>
                  <InputLabel id="demo-simple-select-label">$ Үнэ</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="price"
                    onChange={handleChange}
                  >
                    <MenuItem value={20000}>20 000</MenuItem>
                    <MenuItem value={40000}>40 000</MenuItem>
                    <MenuItem value={100000}>100 000 </MenuItem>
                    <MenuItem value={200000}>200 000</MenuItem>
                    <MenuItem value={3000000}>300 000</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  <DatePicker
                    label={"Сараар"}
                    openTo="month"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                      setPrice("");
                      setValue("");
                      setInputValue("");
                    }}
                    // sx={{
                    //   width: "50px",
                    //   height: "60px",
                    // }}
                    views={["year", "month", "day"]}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </div>
          <ProductSearch value={inputValue} inputHandler={inputHandler} />
        </div>
      </div>

      <TableProduct
        category={value}
        price={price}
        search={inputValue}
        date={dayjs(date).format()}
      />
    </div>
  );
};
