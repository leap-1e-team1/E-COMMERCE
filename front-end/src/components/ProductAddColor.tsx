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

const names = ["Black", "White", "Grey", "Red", "Blue", "Orange", "Purple"];

export default function ProductAddColor() {
  const [colorName, setColorName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof colorName>) => {
    const {
      target: { value },
    } = event;
    setColorName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div className=" ml-6 mt-2">
      <div className="mt-2">
        <FormControl sx={{ width: "250px", height: "18px" }}>
          <InputLabel id="demo-multiple-checkbox-label">Өнгө</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={colorName}
            onChange={handleChange}
            input={<OutlinedInput label="Сонгох" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={colorName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
