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
}

export const SearchContext = createContext<UserContextType | undefined>(
  undefined
);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [productData, setProductData] = useState<ProductsModelType[]>([]);

  return (
    <SearchContext.Provider value={{ productData, setProductData }}>
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
