"use client";

import { ProductsModelType } from "@/components/Search";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

interface UserContextType {
  setProductData: Dispatch<SetStateAction<ProductsModelType[]>>;
  productData: ProductsModelType[];
  searchedData: ProductsModelType[];
  setSearchedData: Dispatch<SetStateAction<ProductsModelType[]>>;
}

export const SearchContext = createContext<UserContextType | undefined>(
  undefined
);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [productData, setProductData] = useState<ProductsModelType[]>([]);
  const [searchedData, setSearchedData] = useState<ProductsModelType[]>([]);

  return (
    <SearchContext.Provider
      value={{ productData, setProductData, searchedData, setSearchedData }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): UserContextType => {
  const search = useContext(SearchContext);

  if (!search) {
    throw new Error("Search must be filled");
  }

  return search;
};
