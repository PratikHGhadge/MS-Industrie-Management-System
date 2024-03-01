import React from "react";
import { ErrorMessage } from "formik";

interface CustomErrorMsgProps {
  name: string;
}

const CustomErrorMsg: React.FC<CustomErrorMsgProps> = ({ name }) => {
  return (
    <div className="text-sm px-2 text-gray-500 font-thin ">
      <ErrorMessage name={name} />
    </div>
  );
};

export default CustomErrorMsg;
