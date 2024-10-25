import { ProductDetail } from "@/components/ProductDetail";

const Page = ({ params }: { params: any }) => {
  const { id } = params;
  return (
    <div>
      <ProductDetail id={id} />
    </div>
  );
};

export default Page;
