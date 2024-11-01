import React, { ChangeEvent } from "react";

export const ProductSearch = ({
  inputHandler,
  value,
}: {
  value: string;
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div>
      <div className="mt-[26px] ml-[327px]">
        <form>
          <input
            className="w-[419px] h-[60px] absolute rounded-xl pl-[50px]"
            type="search"
            id="search"
            name="search"
            placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
            value={value}
            onChange={inputHandler}
          />
          <img src="/search.png" alt="" className="relative pt-4 ml-4 " />
        </form>
      </div>
    </div>
  );
};
