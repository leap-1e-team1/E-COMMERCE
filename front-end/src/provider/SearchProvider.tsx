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

export type CartedProductsType = {
  _id: string;
  productName: string;
  price: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  barcode: string;
  count: number;
  color: string;
  sizes: string[];
  categoryName: string;
  remainingQuantity: number;
  Subclass: string;
  type: string;
  quantity: number;
};
interface UserContextType {
  setProductData: Dispatch<SetStateAction<ProductsModelType[]>>;
  productData: ProductsModelType[];
  savedProducts: ProductsModelType[];
  setSavedProducts: Dispatch<SetStateAction<ProductsModelType[]>>;
  searchedData: ProductsModelType[];
  setSearchedData: Dispatch<SetStateAction<ProductsModelType[]>>;
  cartedProducts: CartedProductsType[];
  setCartedProducts: Dispatch<SetStateAction<CartedProductsType[]>>;
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
  const [cartedProducts, setCartedProducts] = useState<CartedProductsType[]>(
    []
  );
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
        cartedProducts,
        setCartedProducts,
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
