import {Link} from "react-router-dom"
type productType  = {
    price: number;
    name: string;
    avatar: string;
    description:string;
    _id:number
  }

export default function Product(props : {product: productType}) {
    const {product} = props;
  return (
    <>
      <Link to={`/product/${product?._id}`} className="group ">
        <div className="group-hover:shadow-xl block rounded-lg ease-in-out duration-500 mt-2">
        <div className=" bg-white aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 ">
          <img
            src={product?.avatar}
            alt={product?.description}
            className=" h-64  w-full  m-auto"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700 text-center">{product?.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900 text-center">
          ${product?.price}
        </p>
        </div>
      </Link>
    </>
  );
}

// min-h-full max-h-64 min-w-48 max-w-48