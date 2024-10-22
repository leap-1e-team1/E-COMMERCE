import { AdminHeaderComp } from "@/components/AdminHeaderComp";
import { LeftBar } from "@/components/LeftBar";
import { ProductDescription } from "@/components/ProductDescription";
import UploadImage from "@/components/UploadImage";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function AddProductPage() {
  return (
    <Stack>
      <AdminHeaderComp />
      <Stack sx={{ display: "flex", flexDirection: "row", gap: "24px" }}>
        <LeftBar bgColor="Бүтээгдэхүүн" />
        <Stack>
          <div className="flex flex-row h-[56px] gap-8 bg-[#FFFFFF] w-screen">
            <Link href={"/admin/product"} className="flex items-center">
              <button>
                <img src="/Icon.png" alt="" className="w-5 h-5 ml-4" />
              </button>
            </Link>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                fontWeight: "400",
                color: "#121316",
              }}
            >
              Бүтээгдэхүүн нэмэх
            </Typography>
          </div>
          <ProductDescription />
        </Stack>
      </Stack>
    </Stack>
  );
}
