"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const options = ["Малгай", "Усны сав", "T-shirt", "Hoodie", "Tee", "Цүнх"];

export default function ProductCategory() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="mt-6 ml-6">
      <h1 className="text-base font-semibold text-[#121316]">
        Ерөнхий ангилал
      </h1>
      <div className="mt-2">
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: "525px", height: "56px" }}
          renderInput={(params) => <TextField {...params} label="Сонгох" />}
        />
      </div>
    </div>
  );
}
