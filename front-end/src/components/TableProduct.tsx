import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import axios from "axios";
import { Button } from "@mui/material";
import { format } from "date-fns";
import { HiPencil } from "react-icons/hi";

type ProductTypes = {
  _id: string;
  productName: string;
  images: string[];
  description: string;
  barcode: string;
  price: string;
  remainingQuantity: number;
  categoryName: string;
  Subclass: string;
  type: string;
  color: string;
  sizes: string[];
  createdAt: Date;
  updatedAt: Date;
  soldAmount: number;
  isChecked?: boolean;
};

export default function TableProduct({
  category,
  price,
  search,
  date,
}: Record<any, any>) {
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editedRowData, setEditedRowData] = useState<ProductTypes | null>(null);
  const [items, setItems] = useState<string[]>([]);
  const [product, setProduct] = useState<ProductTypes[]>([]);

  const filtered = product.filter((product) => {
    if (category) {
      console.log(product.categoryName);
      return product.categoryName
        .toLocaleLowerCase()
        .includes(category.toLocaleLowerCase());
    } else if (price) {
      return Number(product.price) == price;
    } else if (search) {
      return product.productName
        .toLocaleLowerCase()
        .includes(search.toLowerCase());
    } else {
      return (
        new Date(product.createdAt).getMonth() == new Date(date).getMonth()
      );
    }
  });

  const handleEditClick = (row: ProductTypes) => {
    setEditingItem(row._id);
    setEditedRowData(row);
  };

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const { data }: any = await axios.get(
          `${process.env.BACKEND_URL}/product`,
          {}
        );
        setProduct(data);
        console.log(data);
      } catch (error: any) {
        console.log(error);
      }
    };
    handleSubmit();
  }, [editingItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedRowData) {
      setEditedRowData({
        ...editedRowData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSaveClick = async () => {
    if (editedRowData) {
      console.log(editedRowData);
      const res = await axios.put(
        `${process.env.BACKEND_URL}/product/update/${editedRowData._id}`,
        editedRowData
      );
      console.log(res);

      setEditingItem(null);
      setEditedRowData(null);
    }
  };

  const handleCancelClick = () => {
    if (editedRowData) {
      console.log(editedRowData);

      setEditingItem(null);
      setEditedRowData(null);
    }
  };

  const clickHandler = (id: string) => {
    setItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const handleDelete = async () => {
    if (items.length >= 1) {
      await axios.post(`${process.env.BACKEND_URL}/product/delete`, {
        selectedProductId: items,
      });
    }
  };

  return (
    <Stack sx={{ width: "1300px", marginTop: "16px", marginLeft: "24px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="w-[68px]"></TableCell>
              <TableCell className="w-[214px]">Бүтээгдэхүүн</TableCell>
              <TableCell className="w-[160px]">Ангилал</TableCell>
              <TableCell className="w-[90px]">Үнэ</TableCell>
              <TableCell className="w-[90px]">Үлдэгдэл</TableCell>
              <TableCell className="w-[90px]">Зарагдсан</TableCell>
              <TableCell className="w-[160px]">Нэмсэн огноо</TableCell>
              <TableCell className="w-[104px]"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row._id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    id={row._id}
                    checked={row.isChecked}
                    onClick={() => clickHandler(row._id)}
                  />
                </TableCell>

                <TableCell className="flex flex-col">
                  <div className="flex gap-3">
                    <Image
                      src={row.images[0]}
                      alt={row._id}
                      width={40}
                      height={20}
                      style={{
                        borderRadius: "50%",
                      }}
                    ></Image>

                    <div>
                      {editingItem === row._id ? (
                        <input
                          type="text"
                          name="productName"
                          value={editedRowData?.productName || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{row.productName}</p>
                      )}
                      <p>{row._id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {editingItem === row._id ? (
                    <input
                      type="text"
                      name="categoryName"
                      value={editedRowData?.categoryName || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.categoryName
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row._id ? (
                    <input
                      type="number"
                      name="price"
                      value={editedRowData?.price || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.price
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row._id ? (
                    <input
                      type="number"
                      name="remainingQuantity"
                      value={editedRowData?.remainingQuantity || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.remainingQuantity
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row._id ? (
                    <input
                      type="number"
                      name="soldAmount"
                      value={editedRowData?.soldAmount || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.soldAmount
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row._id ? (
                    <input
                      type="date"
                      name="date"
                      value={
                        editedRowData
                          ? format(
                              new Date(editedRowData.createdAt),
                              "yyyy-MM-dd"
                            )
                          : ""
                      }
                    />
                  ) : (
                    format(row.createdAt, "yyyy/MM/dd")
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row gap-2">
                    {editingItem === row._id ? (
                      <>
                        <Button onClick={handleSaveClick}>Save</Button>
                        <Button onClick={handleCancelClick}>Cancel</Button>
                      </>
                    ) : (
                      <Button onClick={() => handleEditClick(row)}>
                        <HiPencil size={25} />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={handleDelete}>
        <img
          src="/deleteButton.png"
          alt=""
          className="flex ml-[1250px] w-[50px] h-[50px] border-[1px] mt-5 hover:bg-slate-600"
        />
      </button>
    </Stack>
  );
}
