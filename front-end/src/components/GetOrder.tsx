"use client";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const GetOrder = () => {
  const [getOrder, setGetOrder] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const { data }: any = await axios.get(
          `${process.env.BACKEND_URL}/getorder`,
          {}
        );
        setGetOrder(data);
        console.log(data);
      } catch (error: any) {}
    };
    handleSubmit();
  }, []);

  return (
    <div>
      {getOrder.map(({ _id, surname, createdAt, price }, index) => {
        return (
          <div className="flex gap-4 p-4" key={index}>
            <div>{_id}</div>
            <div className="pl-[110px]">{surname}</div>
            <div className="pl-[170px]">{createdAt}</div>
            <div>{price}</div>
            <div>{}</div>
            <div>{}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GetOrder;
