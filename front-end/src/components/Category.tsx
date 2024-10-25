"use client";
import React, { useEffect, useState, Suspense } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CategoryImages } from "./CategoryImages";

export default function Category() {
  const [sizeFilter, setSizeFilter] = useState<any>({
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    xxxl: false,
  });

  const [typesFilter, setTypesFilter] = useState<any>({
    hat: false,
    bottle: false,
    tshirt: false,
    hoodie: false,
    tee: false,
    bag: false,
  });

  const filterHandler = (event: any) => {
    const { name, checked } = event.target;
    setSizeFilter((prev: any) => ({ ...prev, [name]: checked }));
  };

  const sizeFilterHandler = (event: any) => {
    const { name, checked } = event.target;
    setTypesFilter((prev: any) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="mt-[60px] mb-[60px] flex flex-row gap-5">
      <div className="flex flex-col w-[245px] gap-12">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-base font-semibold">Ангилал</h1>

          {JSON.stringify(typesFilter)}
          {JSON.stringify(sizeFilter)}

          <div className="text-sm font-medium ">
            {Object.keys(typesFilter).map((el, index) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={el}
                        checked={typesFilter[el]}
                        onClick={sizeFilterHandler}
                      />
                    }
                    label={el}
                    value={el}
                  />
                </FormGroup>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-base font-semibold">Хэмжээ</h1>
          <div className="text-sm font-medium ">
            {Object.keys(sizeFilter).map((el: any, index: number) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={el}
                        checked={sizeFilter[el]}
                        onClick={filterHandler}
                      />
                    }
                    label={el}
                  />
                </FormGroup>
              );
            })}
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryImages />
      </Suspense>
    </div>
  );
}
