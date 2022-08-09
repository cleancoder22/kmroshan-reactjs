import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Product from "../../components/productList/Product";
import Skeleton from "react-loading-skeleton";

import { getCatagories, getProducts } from "../../service/api";

export default function HomePage() {
  const { data: productData, isLoading } = useQuery(["All products"], () =>
    getProducts()
  );

  const { data: categoryData, isLoading: isCatagoryLoading } = useQuery(
    ["All catagory"],
    () => getCatagories()
  );

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [filteredProductData, setFilteredProductData] = useState([]);

  type productType = {
    price: number;
    name: string;
    category: string;
    avatar: string;
    description: string;
    _id: number;
  };

  type categoryType = {
    name: string;
  };

  useEffect(() => {
    setFilteredProductData((prev) => productData?.products);
    if (category !== "all" && category.length && productData && search === "") {
      let filterData = productData?.products?.filter(
        (product: productType) => product?.category === category
      );
      setFilteredProductData((prev) => filterData);
    } else if (search !== "") {
      let filterData = productData?.products?.filter((product: productType) => {
        if (category === "all" && category.length) {
          return product?.name?.includes(search);
        } else {
          return (
            product?.name?.includes(search) && product?.category === category
          );
        }
      });
      setFilteredProductData((prev) => filterData);
    }
  }, [productData, category, search]);

  const categoryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory((prev) => e?.target?.value);
  };

  if (isLoading || isCatagoryLoading) {
    return (
      <div className="flex flex-col items-center justify-center mx-auto mt-12">
        {/* <Skeleton className="rounded-xl" count={1} height={260} width={800} ></Skeleton> */}
        <div>
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {Array(24)
                ?.fill(0)
                ?.map(() => (
                  <Skeleton
                    className="mt-8 rounded-xl"
                    width={280}
                    height={256}
                    count={1}
                  ></Skeleton>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleChangeSearch = (value: string) => {
    setSearch((prev) => value);
  };

  return (
    <>
      <div className="">
        <div className="flex  flex-row justify-between  mt-16">
          <div className="max-w-[25%] w-full">
            <input
              type="text"
              onChange={(e) => handleChangeSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded-md pr-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
            />
          </div>

          <div className="max-w-[25%] w-full bg-white bg-clip-padding bg-no-repeat overflow-hidden rounded-md border border-solid pr-4 border-gray-300 ml-auto">
            <select
              className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 mx-auto border-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              placeholder="Category"
              onChange={categoryChangeHandler}
            >
              <option selected value="">
                Catagories
              </option>
              {categoryData?.categories?.map((category: categoryType) => {
                return <option value={category?.name}>{category?.name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProductData?.length ? (
              <>
                {filteredProductData?.map((product: productType) => {
                  return (
                    <>
                      <Product product={product} />
                    </>
                  );
                })}
              </>
            ) : (
              <h2>No items found</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
