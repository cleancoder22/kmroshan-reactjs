import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Product from "../../components/productList/Product";
import Skeleton from "react-loading-skeleton";

import { getCatagories, getProducts } from "../../service/api";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data: productData, isLoading } = useQuery(
    ["All products", "Homepage"],
    () => getProducts()
  );

  const { data: categoryData, isLoading: isCatagoryLoading } = useQuery(
    ["All catagory"],
    () => getCatagories()
  );

  const [category, setCategory] = useState("all");
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
                ?.map((_, i) => (
                  <Skeleton
                    key={i}
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

  const Plus = () => {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="3em"
        width="3em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
        ></path>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
      </svg>
    );
  };
  const EmptyCart = () => {
    return (
      <svg
        stroke="currentColor"
        fill="none"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="10em"
        width="10em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.55024 10.5503C8.55024 11.1026 8.10253 11.5503 7.55024 11.5503C6.99796 11.5503 6.55024 11.1026 6.55024 10.5503C6.55024 9.99801 6.99796 9.55029 7.55024 9.55029C8.10253 9.55029 8.55024 9.99801 8.55024 10.5503Z"
          fill="currentColor"
        ></path>
        <path
          d="M10.5502 11.5503C11.1025 11.5503 11.5502 11.1026 11.5502 10.5503C11.5502 9.99801 11.1025 9.55029 10.5502 9.55029C9.99796 9.55029 9.55024 9.99801 9.55024 10.5503C9.55024 11.1026 9.99796 11.5503 10.5502 11.5503Z"
          fill="currentColor"
        ></path>
        <path
          d="M13.5502 11.5503C14.1025 11.5503 14.5502 11.1026 14.5502 10.5503C14.5502 9.99801 14.1025 9.55029 13.5502 9.55029C12.998 9.55029 12.5502 9.99801 12.5502 10.5503C12.5502 11.1026 12.998 11.5503 13.5502 11.5503Z"
          fill="currentColor"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.2071 4.89344C19.0922 7.7786 19.313 12.3192 16.8693 15.4577C16.8846 15.4712 16.8996 15.4853 16.9142 15.4999L21.1568 19.7426C21.5473 20.1331 21.5473 20.7663 21.1568 21.1568C20.7663 21.5473 20.1331 21.5473 19.7426 21.1568L15.5 16.9141C15.4853 16.8995 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77858 19.0923 4.89338 16.2071C1.76918 13.083 1.76918 8.01763 4.89338 4.89344C8.01757 1.76924 13.0829 1.76924 16.2071 4.89344ZM6.30759 14.7929C8.65074 17.1361 12.4497 17.1361 14.7929 14.7929C17.136 12.4498 17.136 8.6508 14.7929 6.30765C12.4497 3.96451 8.65074 3.96451 6.30759 6.30765C3.96445 8.6508 3.96445 12.4498 6.30759 14.7929Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  };

  return (
    <>
      <div className="self-start w-full">
        <div className="flex  flex-row justify-between  mt-16">
          <div className="max-w-[25%] w-full">
            <input
              type="text"
              key={"searchInput"}
              onChange={(e) => handleChangeSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded-md pr-4 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
            />
          </div>

          <div className="max-w-[25%] w-full bg-white bg-clip-padding bg-no-repeat overflow-hidden rounded-md border border-solid pr-4 border-gray-300 ml-auto">
            <select
              key={"categorySelect"}
              className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 mx-auto border-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              placeholder="Category"
              onChange={categoryChangeHandler}
              defaultValue={"all"}
            >
              <option value="all">Catagories</option>
              {categoryData?.categories?.map((category: categoryType) => {
                return <option value={category?.name}>{category?.name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {filteredProductData?.length ? (
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <>
                {filteredProductData?.map((product: productType) => {
                  return (
                    <>
                      <Product product={product} />
                    </>
                  );
                })}
              </>
            </div>
          ) : (
            <>
              <div className="mx-auto flex justify-center flex-col items-center">
                <EmptyCart />
                <h2 className="font-bold ml-[7.5rem]">
                  Oops! No items were found
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
      <Link
        to="/create-product"
        className="w-[80px] h-[80px] flex justify-center items-center fixed bottom-6 bg-white right-12 rounded-full border border-[1px] border-black"
      >
        <Plus />
      </Link>
    </>
  );
}
