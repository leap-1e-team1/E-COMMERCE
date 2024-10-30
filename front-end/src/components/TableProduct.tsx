import React, { useState } from "react";
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
import { log } from "console";

const rows = [
  {
    id: "0001",
    productImage: "/hoodie.png",
    productName: "Wildflower hoodie",
    category: "hoodie",
    price: "200000",
    remain: "35",
    sold: "25",
    date: "2024.01.10",

    editIcon: "/editButton.png",
    isChecked: false,
  },
  {
    id: "0002",
    productImage: "/water.png",
    productName: "All Smiles Nalgene",
    category: "Усны сав",
    price: "50000",
    remain: "25",
    sold: "45",
    date: "2024.02.02",
    editIcon: "/editButton.png",
    isChecked: false,
  },
  {
    id: "0003",
    productImage: "/blue-hat.png",
    productName: "Chunky Glyph Cap",
    category: "Малгай",
    price: "100000",
    remain: "15",
    sold: "20",
    date: "2024.03.03",
    editIcon: "/editButton.png",
    isChecked: false,
  },
  {
    id: "0004",
    productImage: "/tee.png",
    productName: "Independent Corners Tee",
    category: "Tee",
    price: "150000",
    remain: "20",
    sold: "35",
    date: "2024.04.04",
    editIcon: "/editButton.png",
    isChecked: false,
  },
];

export default function TableProduct() {
  const [items, setItems] = useState<any[]>(rows);

  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editedRowData, setEditedRowData] = useState<any | null>(null);

  const handleEditClick = (row: any) => {
    setEditingItem(row.id);
    setEditedRowData(row);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedRowData) {
      setEditedRowData({
        ...editedRowData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSaveClick = () => {
    setItems((prev) =>
      prev.map((item) => (item.id === editedRowData.id ? editedRowData : item))
    );
    setEditingItem(null);
    setEditedRowData(null);
  };

  const handleCancelClick = () => {
    setEditingItem(null);
    setEditedRowData(null);
  };
  const clickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const { id } = event.target as HTMLInputElement;
    setItems((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          return { ...el, isChecked: !el.isChecked };
        } else {
          return { ...el };
        }
      })
    );
  };

  const handleDelete = async () => {
    const checked = items.filter((item) => item.isChecked === true);
    const deletingItems = checked.map((el) => el.id);
    await axios.post(`${process.env.BACKEND_URL}/product/delete`, {
      selectedProductId: deletingItems,
    });
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
            {items.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    id={row.id}
                    checked={row.isChecked}
                    onClick={clickHandler}
                  />
                </TableCell>
                <TableCell className="flex flex-col">
                  <div className="flex gap-3">
                    <Image
                      src={row.productImage}
                      alt={row.id}
                      width={40}
                      height={20}
                      style={{
                        borderRadius: "50%",
                      }}
                    ></Image>

                    <div>
                      {editingItem === row.id ? (
                        <input
                          type="text"
                          name="productName"
                          value={editedRowData?.productName || ""}
                          onChange={handleChange}
                        />
                      ) : (
                        <p>{row.productName}</p>
                      )}
                      <p>{row.id}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {editingItem === row.id ? (
                    <input
                      type="text"
                      name="category"
                      value={editedRowData?.category || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.category
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row.id ? (
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
                  {editingItem === row.id ? (
                    <input
                      type="number"
                      name="remain"
                      value={editedRowData?.remain || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.remain
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row.id ? (
                    <input
                      type="number"
                      name="sold"
                      value={editedRowData?.sold || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.sold
                  )}
                </TableCell>
                <TableCell>
                  {editingItem === row.id ? (
                    <input
                      type="date"
                      name="date"
                      value={editedRowData?.date || ""}
                      onChange={handleChange}
                    />
                  ) : (
                    row.date
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row gap-[20px]">
                    {editingItem === row.id ? (
                      <>
                        <Button onClick={handleSaveClick}>Save</Button>
                        <Button onClick={handleCancelClick}>Cancel</Button>
                      </>
                    ) : (
                      <button onClick={() => handleEditClick(row)}>
                        <Image
                          src={row.editIcon}
                          alt={row.id}
                          width={40}
                          height={40}
                        />
                      </button>
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
