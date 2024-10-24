"use client";

import axios from "axios";
import { useState } from "react";

interface ProductCategory {
  images: string;
}

const Category1 = () => {
  const [asd, setAsd] = useState<ProductCategory[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get<ProductCategory[]>(
        "http://localhost:8000/imageavah"
      );

      if (Array.isArray(response.data)) {
        setAsd(response.data);
      } else {
        alert("Unexpected response structure");
      }
    } catch (error: any) {
      const message = error.response?.data?.message || "Error fetching data";
      alert(`Error: ${message}`);
    }
  };

  return (
    <div className="mt-[200px]">
      <button onClick={handleSubmit}>asd</button>
      {asd.map((el, index) => (
        <img key={index} src={el.images} />
      ))}
    </div>
  );
};

export default Category1;
=======
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { CategoryImages } from "./CategoryImages";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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

  const { push } = useRouter();
  const pathname = usePathname();

  const filterHandler = (event: any) => {
    const { name, checked } = event.target;

    setSizeFilter((prev: any) => ({ ...prev, [name]: checked }));
  };

  const sizeFilterHandler = (event: any) => {
    const { name, checked } = event.target;

    setTypesFilter((prev: any) => ({ ...prev, [name]: checked }));
  };

  // useEffect(() => {
  //   // push(`${pathname}?filter=${filter}`);
  // }, [typesFilter, sizeFilter]);

  return (
    <div className="mt-[60px] mb-[60px] flex flex-row  gap-5">
      <div className="flex flex-col w-[245px] gap-12 ">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-base font-semibold">Ангилал</h1>

          {JSON.stringify(typesFilter)}
          {JSON.stringify(sizeFilter)}

          <div className=" text-sm font-medium ">
            {Object.keys(typesFilter).map((el, index) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={el}
                        defaultChecked
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
          <div className=" text-sm font-medium ">
            {Object.keys(sizeFilter).map((el: any, index: number) => {
              return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={el}
                        defaultChecked
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
      <CategoryImages />
    </div>
  );
}

