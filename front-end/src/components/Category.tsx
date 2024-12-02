"use client";
import { useState, Suspense, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CategoryImages } from "./CategoryImages";
import axios from "axios";
import { useSearch } from "@/provider/SearchProvider";
import { ProductsModelType } from "./Search";
import { SearchInput } from "./SearchInput";
import { Stack } from "@mui/material";

export default function Category() {
  const { setProductData, searchedData } = useSearch();

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
  };

  useEffect(() => {
    const filterArray = Object.keys(typesFilter).map((el) => {
      if (typesFilter[el]) {
        return el.toLowerCase();
      }
    });

    const getFilteredData = async () => {
      const { data }: { data: { foundByFilter: ProductsModelType[] } } =
        await axios.post(`${process.env.BACKEND_URL}/filter`, {
          filterValue: filterArray,
        });

      setProductData(data.foundByFilter);
    };
    getFilteredData();
  }, [typesFilter]);

  return (
    <div className="mt-[128px] mb-[60px] flex flex-row gap-5 pl-[200px] relative">
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
      {/* <div className="flex flex-col justify-items-center absolute top-[-60px] right-[1080px]">
        {searchedData.length ? <SearchInput product={searchedData} /> : <></>}
      </div> */}
    </div>
  );
}

// aa
