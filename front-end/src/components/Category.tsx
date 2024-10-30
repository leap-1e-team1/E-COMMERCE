"use client";
import { useState, Suspense, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CategoryImages } from "./CategoryImages";
import axios from "axios";
import { useSearch } from "@/provider/SearchProvider";
import { ProductsModelType } from "./Search";

export default function Category() {
  const { setProductData } = useSearch();

  const [sizeFilter, setSizeFilter] = useState<any>({
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    xxxl: false,
  });

  const [typesFilter, setTypesFilter] = useState<any>({
    Hat: false,
    Bottle: false,
    Tshirt: false,
    Hoodie: false,
    Tee: false,
    Bag: false,
  });

  const filterHandler = async (event: any) => {
    const { name, checked } = event.target;
    setSizeFilter((prev: any) => ({ ...prev, [name]: checked }));
  };

  const sizeFilterHandler = async (event: any) => {
    const { name, checked } = event.target;
    setTypesFilter((prev: any) => ({ ...prev, [name]: checked }));

    const { data }: { data: { foundByFilter: ProductsModelType[] } } =
      await axios.post(`${process.env.BACKEND_URL}/filter`, {
        filterValue: checked ? name?.toLowerCase() : "",
      });

    setProductData(data.foundByFilter);
  };

  return (
    <div className="mt-[128px] mb-[60px] flex flex-row gap-5 pl-[200px]">
      <div className="flex flex-col w-[245px] gap-12">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-base font-semibold">Ангилал</h1>
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
