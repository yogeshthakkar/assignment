import React from "react";
import RecentPostCard from "./RecentPostCard";

function RecentPost(props) {
  return (
    <div className="container-lg relative left-0 bg-blue-100 h-auto p-10 ">
      <div className="flex">
        <div
          className="w-32 h-16 not-italic font-normal text-xl text-gray-900 font-Heebo"
          style={{
            marginLeft: "15%",
            top: 602,
          }}
        >
          {" "}
          Recent posts
        </div>
        <div
          className="w-48 h-5 not-italic font-normal text-base leading-6 text-right text-blue-600 font-Heebo"
          style={{ left: 796, top: 622, marginLeft: "33%" }}
        >
          View All
        </div>
      </div>
      <div className="flex ml-56">
        <RecentPostCard
          title="Making a design system from scratch"
          date="12 Feb 2020"
          otherData="Design,Pattern"
          details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <RecentPostCard
          title="Making a design system from scratch"
          date="12 Feb 2020"
          otherData="Design,Pattern"
          details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
}

export default RecentPost;
