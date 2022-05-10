import React from "react";

function RecentPostCard(props) {
  return (
    <div
      className="container relative bg-white rounded p-3 my-2  ml-10"
      style={{ width: 418, height: "auto" }}
    >
      {/* for title */}
      <div
        className="h-20 not-italic font-bold text-2xl leading-9 font-Heebo"
        style={{ width: 374, left: 171, top: 688 }}
      >
        {props.title}
      </div>
      {/* date and otherData*/}
      <div className="flex">
        <div
          className="h-8 not-italic font-normal text-lg leading-6 text-gray-900 font-Heebo"
          style={{ width: 174, left: 150, top: 790 }}
        >
          {props.date}
        </div>{" "}
        <span style={{ margin: "0 12%" }}>|</span>
        <div
          className="font-Heebo w-56 h-8 not-italic font-normal text-lg leading-6 text-gray-900"
          style={{
            left: 300,
            top: 790,
          }}
        >
          {props.otherData}
        </div>
      </div>
      {/* details */}
      <div
        className="h-32 not-italic font-normal text-base leading-6 text-gray-900 font-Heebo"
        style={{ left: 171, top: 835, marginTop: 11 }}
      >
        {props.details}
      </div>
    </div>
  );
}

export default RecentPostCard;
