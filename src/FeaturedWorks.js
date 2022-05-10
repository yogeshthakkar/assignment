import React from "react";

const FeaturedWorks = () => {
  const data = [
    {
      image: "project1.png",
      title: "Morning Context",
      date: "2022",
      caption: "WebApp",
      description:
        "Morning Context is a project in which users can be able read top stories/newsletters of current topics which are related to ,business,internet,etc.",
    },
    {
      image: "project2.png",
      title: "Email Verification",
      date: "2021",
      caption: "WebApp",
      description:
        "n which, will identify valid email addresses from a list of email addresses with respect to minimum response time. ",
    },
    {
      image: "project3.png",
      title: "Barrio",
      date: "2019",
      caption: "Dashboard",
      description:
        "It is a type of project in which users can create their article ,news, category and chat between the user with like ,comment ,share and add to bookmark .This project has an application as well as website. ",
    },
    {
      image: "project1.png",
      title: "Settlement Tariff",
      date: "2019",
      caption: "Backend",
      description:
        "it provides a facility to find a house and PG on rent.This web application makes the process of scheduling much easier and computerized.",
    },
  ];
  return (
    <>
      <div
        className="w-40 h-16 not-italic font-normal text-xl text-gray-900 font-Heebo"
        style={{ marginTop: "2%", marginLeft: "8%" }}
      >
        Featured Works
      </div>
      {data.map((value, index) => {
        return (
          <div className="flex m-2" style={{ padding: "0px 8%" }} key={index}>
            <div>
              <img src={value.image} />
            </div>
            <div className="ml-3">
              <div className="h-10 not-italic font-bold text-3xl text-gray-900 font-Heebo">
                {value.title}
              </div>
              <div
                className="flex 
"
              >
                <div
                  className="w-16 h-6 bg-gray-800"
                  style={{
                    borderRadius: "16px",
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  {value.date}
                </div>
                <div className="ml-8 h-8 not-italic font-normal text-xl leading-7 text-gray-600 font-Heebo">
                  {value.caption}
                </div>
              </div>
              <div className="h-24 not-italic font-normal text-base leading-6 text-gray-900 font-Heebo">
                {value.description}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeaturedWorks;
