import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { inputRules } from "../../helpers/createFormValidation";
import { getCatagories, postProduct } from "../../service/api";
import { ErrorMessage } from "@hookform/error-message";
import FieldErrorMsg from "../../components/fieldErrorMsg/FieldErrorMsg";

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const alert = useAlert();
  const navigate = useNavigate();
  const { data: categoryData } = useQuery(["All catagory", "create Page"], () =>
    getCatagories()
  );
  type dataType = {
    data: {
      product: {
        name: string;
      };
    };
  };
  const { mutate } = useMutation(postProduct, {
    onSuccess: (data: dataType) => {
      navigate("/");
      alert.success(
        <div
          style={{ color: "green", borderRadius: `250pxpx` }}
        >{`Product ${data?.data?.product?.name} Created successfully`}</div>
      );
    },
    onError: () => {
      alert.error(
        <div
          style={{ color: "red", borderRadius: `50px` }}
        >{`An Error Occured`}</div>
      );
    },
  });

  type categoryType = {
    name: string;
  };

  const onSubmit = (data: any) => {
    let payloadData = data;
    payloadData["developerEmail"] = process.env.REACT_APP_DEVELOPER_EMAIL;
    mutate(payloadData);
  };
  return (
    <div className="my-auto mt-[70px]">
      <div className="flex flex-col my-auto max-w-16 gap-y-3">
        <h1 className="text-[32px] font-bold text-center">Create Product</h1>

        <div className=" w-[500px]">
          <input
            type="text"
            className="form-control
          block
          shadow-md
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-lg
          w-full
          transition
          ease-in-out
          m-0
          mt-2
          mx-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
            placeholder="Product Name"
            {...register("name", { ...inputRules.name })}
          />
          <ErrorMessage
            errors={errors}
            name={"name"}
            render={(props) => <FieldErrorMsg {...props} />}
          />
        </div>
        
        <div className="w-[500px]">
          <textarea
            rows={4}
            placeholder="Product Description"
            className="form-control
          block
          w-full
          px-3
          py-1.5
          shadow-md
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-lg
          mb-2
          w-[500px]
          transition
          ease-in-out
          m-0
          mx-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
            {...register("description", { ...inputRules.description })}
          />
           <ErrorMessage
              errors={errors}
              name={"description"}
              render={(props) => <FieldErrorMsg {...props} />}
            />
        </div>

        <div className="w-[500px]">
          <input
            type="url"
            className="form-control
          block
          w-full
          px-3
          py-1.5
          shadow-md
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-lg
          w-full
          transition
          ease-in-out
          m-0
          mx-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
            placeholder="Image Url"
            {...register("avatar", { ...inputRules.imageUrl })}
          />
           <ErrorMessage
                errors={errors}
                name={"avatar"}
                render={(props) => <FieldErrorMsg {...props} />}
              />
        </div>

        <div className="w-[500px]">
          <select
            className="form-select shadow-md block w-full px-3 py-1.5 text-base font-normal text-gray-700 mx-auto border-none transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-lg w-full"
            aria-label="Default select example"
            {...register("category", { ...inputRules.category })}
          >
            <option selected value="" disabled>
              Catagories
            </option>
            {categoryData?.categories?.map((category: categoryType) => {
              return <option value={category?.name}>{category?.name}</option>;
            })}
          </select>
          <ErrorMessage
                errors={errors}
                name={"category"}
                render={(props) => <FieldErrorMsg {...props} />}
              />
        </div>

        <div className="w-[500px]">
          <input
            type="number"
            className="form-control
          block
          w-full
          px-3
          py-1.5
          shadow-md
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded-lg
          w-full
          transition
          ease-in-out
          m-0
          mx-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
            placeholder="Product Price"
            {...register("price", { ...inputRules.price})}
          />
           <ErrorMessage
                errors={errors}
                name={"price"}
                render={(props) => <FieldErrorMsg {...props} />}
              />
        </div>

      </div>
      <input
        type="submit"
        className="form-control
        block
        w-full
        mt-5
        shadow-md
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        mb-2
        w-[500px]
        transition
        ease-in-out
        m-0
        mx-auto
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
}
