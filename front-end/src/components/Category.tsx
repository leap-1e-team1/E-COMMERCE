"use client";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { CategoryImages } from "./CategoryImages";

const types = ["Малгай", "Усны сав", "T-shirt", "Hoodie", "Tee", "Цүнх"];
const sizes = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];

export default function Category() {
  return (
    <div className="mt-[60px] mb-[60px] flex flex-row  gap-5">
      <div className="flex flex-col w-[245px] gap-12 ">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-base font-semibold">Ангилал</h1>
          <div className=" text-sm font-medium ">
            {types.map((el, index) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={el}
                  />
                </FormGroup>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-base font-semibold">Хэмжээ</h1>
          <div className=" text-sm font-medium ">
            {sizes.map((el, index) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={el}
                  />
                </FormGroup>
              );
            })}
          </div>
        </div>
      </div>
      <CategoryImages />
    </div>
  );
}
