import React from "react";

const AdditionIntervalData = ({ data }) => {
  return (
    <div className="w-full shadow-md bg-white px-2 py-4 border text-sm flex flex-col ">
      <div className="flex">
        <p className="font-bold">Xmin:&nbsp;&nbsp;</p>
        <p>{data?.Xmin}</p>
      </div>
      <div className="flex">
        <p className="font-bold">Xmax:&nbsp;&nbsp;</p>
        <p>{data?.Xmax}</p>
      </div>
      <div className="flex">
        <p className="font-bold">X1:&nbsp;&nbsp;</p>
        <p>{data?.X1}</p>
      </div>
      <div className="flex">
        <p className="font-bold">X2:&nbsp;&nbsp;</p>
        <p>{data?.X2}</p>
      </div>
      <div className="flex">
        <p className="font-bold">Universe:&nbsp;&nbsp;</p>
        <p>{`[${data?.universe?.XminRounding}, ${data?.universe?.XmaxRounding}]`}</p>
      </div>
    </div>
  );
};

export default AdditionIntervalData;
