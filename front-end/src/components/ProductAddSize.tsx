"use client";
import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Short", "Long", "34", "36", "38", "40", "42"];

export default function ProductAddSize() {
  const [sizeName, setSizeName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof sizeName>) => {
    const {
      target: { value },
    } = event;
    setSizeName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className=" ml-6 mt-6">
      <div className="mt-2">
        <FormControl sx={{ width: "250px", height: "28px" }}>
          <InputLabel id="demo-multiple-checkbox-label">Хэмжээ</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={sizeName}
            onChange={handleChange}
            input={<OutlinedInput label="Хэмжээ" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={sizeName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
