import { useQuery } from "react-query";
import Product from "../../components/productList/Product";

import { getProducts } from "../../service/api";

export default function HomePage() {
  const { data: productData, isLoading } = useQuery(["All products"], () =>
    getProducts()
  );

  console.log(
    "🚀 ~ file: HomePage.tsx ~ line 10 ~ HomePage ~ productData",
    productData
  );

  type productType  = {
    price: number;
    name: string;
    avatar: string;
    description:string;
  }

  if (isLoading) {
    return <h1>loading ...</h1>;
  }



  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productData?.products.map((product: productType) => {
              return (
                <>
                  <Product product={product}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

//   <div className="bg-white">
//     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//       <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//         <div className="group relative">
//           <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
//             <img
//               src={`${product?.avatar}`}
//               alt={product?.name}
//               className="w-full h-full object-center object-cover lg:w-full lg:h-full"
//             />
//           </div>
//           <div className="mt-4 flex justify-between">
//             <div>
//               <h3 className="text-sm text-gray-700">
//                 <a href="/">
//                   <span
//                     aria-hidden="true"
//                     className="absolute inset-0"
//                   ></span>
//                   {product?.name}
//                 </a>
//               </h3>
//               {/* <p className="mt-1 text-sm text-gray-500"> {product?.name}</p> */}
//             </div>
//             <p className="text-sm font-medium text-gray-900">${product?.price}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
