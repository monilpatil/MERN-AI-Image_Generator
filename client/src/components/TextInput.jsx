import React from "react";
import styled from "styled-components";



const Input = styled.input`
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <div className="mt-8 flex flex-col">
      <label className=" mx-0 my-3 px-1 py-0 uppercase ">
        <p className=" hover:drop-shadow-[0_0px_5px_rgb(135,206,250)] transition duration-500  ">
          {label}
        </p>
      </label>
      <div className="hover:shadow-[0_0px_25px_rgb(0,191,255)] w-80  md:w-[500px] border rounded-xl outline-none p-3  bg-black/10 hover:bg-black/10 transition duration-500 flex items-center gap-3   ">
        <Input
          className=" w-[100%] text-sm outline-none border-none bg-transparent focus:outline-none "
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
        ></Input>
      </div>
    </div>
  );
};

export default TextInput;
