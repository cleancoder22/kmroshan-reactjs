
type productType  = {
    price: number;
    name: string;
    avatar: string;
    description:string;
  }

export default function Product(props : {product: productType}) {
    const {product} = props;
  return (
    <>
      <a href="/" className="group">
        <div className=" w-100 h-200 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product?.avatar}
            alt={product?.description}
            className="w-100 h-200 object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product?.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product?.price}
        </p>
      </a>
    </>
  );
}
