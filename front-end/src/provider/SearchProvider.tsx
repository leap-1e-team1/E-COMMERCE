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
  useEffect,
} from "react";

interface UserContextType {
  setProductData: Dispatch<SetStateAction<ProductsModelType[]>>;
  productData: ProductsModelType[];
  savedProducts: ProductsModelType[];
  setSavedProducts: Dispatch<SetStateAction<ProductsModelType[]>>;
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
  const [savedProducts, setSavedProducts] = useState<ProductsModelType[]>([]);
  const [searchedData, setSearchedData] = useState<ProductsModelType[]>([]);

  return (
    <SearchContext.Provider
      value={{
        productData,
        setProductData,
        savedProducts,
        setSavedProducts,
        searchedData,
        setSearchedData,
      }}
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
