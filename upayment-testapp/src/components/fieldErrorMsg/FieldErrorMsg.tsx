type FieldErrorMsgType = {
    message:string,
    className?:string
}

export default function FieldErrorMsg({ message, className="text-red-500 text-sm mt-0" }:FieldErrorMsgType) {
    return <span className={`${className}`}>{message}</span>;
  }
  