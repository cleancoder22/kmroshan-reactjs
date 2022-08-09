import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../../service/api";
import Skeleton from "react-loading-skeleton";
import Layout from "../../layout/Layout";

export default function ProductDetail() {
  const { id } = useParams();

  console.log("🚀 ~ file: ProductDetail.tsx ~ line 7 ~ ProductDetail ~ id", id);

  const { data: productData, isLoading } = useQuery(
    ["product Details", id],
    () => getProduct(id)
  );
  console.log(
    "🚀 ~ file: ProductDetail.tsx ~ line 12 ~ ProductDetail ~ productData",
    productData
  );
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto max-w-[800px] mt-12" >
        <Skeleton className="rounded-xl" count={1} height={260} width={800} ></Skeleton>
        <Skeleton className="mt-8 rounded-xl" count={1} height={500} width={800}></Skeleton>
      </div>
    );
  }

  return (
    <>
      <div className="">
        <div className="container max-w-[800px] m-auto flex flex-col">
          <div className="title-container mt-12 flex flex-row">
            <div className="avatar rounded-xl overflow-hidden w-[220px] h-[230px]">
              <img className="w-full h-full" src={productData?.product?.avatar} alt={productData?.product?.name} />
            </div>
            
            <div className="flex justify-between flex-col ml-8">
              <div className="title">
                <h1 className="text-[32px] font-bold">{productData?.product?.name}</h1>
              </div>
              <div className="price text-[22px] font-medium">$ {productData?.product?.price}</div>
            </div>
          </div>
          <div className="w-100 h-[2px] bg-gray-500 my-8"  />
          <div className="dessc">
            <div>
                <h1 className="font-medium text-[22px]">Description</h1>
            </div>
            <div className="mt-3">
                <p>{productData?.product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
