import React, { useState, useEffect } from "react";

const Table = () => {
  const [coloredRow, setcoloredRow] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      college: {
        name: "IIT MADRAS",
        state: "Tamil Nadu",
        capital: "Chennai",
      },
      courseFee: "2,00,000",
      Placement: ["20,00,000", "1,90,00,000"],
      reviewsData: {
        reviews: 8.7,
        basedon: 289,
      },
      rank: 3,
    },
    {
      id: 2,
      college: {
        name: "IIT BOMBAY",
        state: "Maharashtra",
        capital: "Mumbai",
      },
      courseFee: "2,10,000",
      Placement: ["22,00,000", "2,00,00,000"],
      reviewsData: {
        reviews: 9.1,
        basedon: 350,
      },
      rank: 1,
    },
    {
      id: 3,
      college: {
        name: "IIT DELHI",
        state: "Delhi",
        capital: "New Delhi",
      },
      courseFee: "2,05,000",
      Placement: ["21,50,000", "1,95,00,000"],
      reviewsData: {
        reviews: 4.0,
        basedon: 320,
      },
      rank: 5,
    },
    {
      id: 4,
      college: {
        name: "IIT KANPUR",
        state: "Uttar Pradesh",
        capital: "Lucknow",
      },
      courseFee: "2,00,000",
      Placement: ["20,50,000", "1,85,00,000"],
      reviewsData: {
        reviews: 9.7,
        basedon: 310,
      },
      rank: 4,
    },
    {
      id: 5,
      college: {
        name: "IIT KHARAGPUR",
        state: "West Bengal",
        capital: "Kolkata",
      },
      courseFee: "2,15,000",
      Placement: ["21,00,000", "1,90,00,000"],
      reviewsData: {
        reviews: 6,
        basedon: 295,
      },
      rank: 2,
    },
    {
      id: 6,
      college: {
        name: "BITS PILANI",
        state: "Rajasthan",
        capital: "Jaipur",
      },
      courseFee: "3,00,000",
      Placement: ["18,00,000", "1,75,00,000"],
      reviewsData: {
        reviews: 9,
        basedon: 270,
      },
      rank: 9,
    },
    {
      id: 7,
      college: {
        name: "IIT ROORKEE",
        state: "Uttarakhand",
        capital: "Dehradun",
      },
      courseFee: "2,10,000",
      Placement: ["19,00,000", "1,80,00,000"],
      reviewsData: {
        reviews: 8.5,
        basedon: 280,
      },
      rank: 7,
    },
    {
      id: 8,
      college: {
        name: "IIT GUWAHATI",
        state: "Assam",
        capital: "Dispur",
      },
      courseFee: "2,20,000",
      Placement: ["19,50,000", "1,85,00,000"],
      reviewsData: {
        reviews: 8.3,
        basedon: 260,
      },
      rank: 10,
    },
    {
      id: 9,
      college: {
        name: "IIT HYDERABAD",
        state: "Telangana",
        capital: "Hyderabad",
      },
      courseFee: "2,25,000",
      Placement: ["18,50,000", "1,70,00,000"],
      reviewsData: {
        reviews: 8.2,
        basedon: 250,
      },
      rank: 6,
    },
    {
      id: 10,
      college: {
        name: "NIT TRICHY",
        state: "Tamil Nadu",
        capital: "Chennai",
      },
      courseFee: "1,80,000",
      Placement: ["16,00,000", "1,60,00,000"],
      reviewsData: {
        reviews: 8.0,
        basedon: 230,
      },
      rank: 12,
    },
    {
      id: 11,
      college: {
        name: "NIT SURATHKAL",
        state: "Karnataka",
        capital: "Bangalore",
      },
      courseFee: "1,85,000",
      Placement: ["15,50,000", "1,50,00,000"],
      reviewsData: {
        reviews: 7.9,
        basedon: 220,
      },
      rank: 11,
    },
    {
      id: 12,
      college: {
        name: "Anna University",
        state: "Tamil Nadu",
        capital: "Chennai",
      },
      courseFee: "1,50,000",
      Placement: ["12,00,000", "1,20,00,000"],
      reviewsData: {
        reviews: 7.5,
        basedon: 210,
      },
      rank: 15,
    },
    {
      id: 13,
      college: {
        name: "VIT Vellore",
        state: "Tamil Nadu",
        capital: "Chennai",
      },
      courseFee: "1,80,000",
      Placement: ["14,00,000", "1,50,00,000"],
      reviewsData: {
        reviews: 8.1,
        basedon: 240,
      },
      rank: 14,
    },
    {
      id: 14,
      college: {
        name: "SRM Institute of Science and Technology",
        state: "Tamil Nadu",
        capital: "Chennai",
      },
      courseFee: "2,00,000",
      Placement: ["13,00,000", "1,40,00,000"],
      reviewsData: {
        reviews: 7.8,
        basedon: 225,
      },
      rank: 16,
    },
    {
      id: 15,
      college: {
        name: "Manipal Institute of Technology",
        state: "Karnataka",
        capital: "Bangalore",
      },
      courseFee: "2,50,000",
      Placement: ["15,00,000", "1,60,00,000"],
      reviewsData: {
        reviews: 8.3,
        basedon: 265,
      },
      rank: 13,
    },
    {
      id: 16,
      college: {
        name: "Amrita Vishwa Vidyapeetham",
        state: "Kerala",
        capital: "Thiruvananthapuram",
      },
      courseFee: "2,20,000",
      Placement: ["14,50,000", "1,55,00,000"],
      reviewsData: {
        reviews: 8.0,
        basedon: 230,
      },
      rank: 17,
    },
    {
      id: 17,
      college: {
        name: "Thapar Institute of Engineering and Technology",
        state: "Punjab",
        capital: "Chandigarh",
      },
      courseFee: "2,30,000",
      Placement: ["16,50,000", "1,65,00,000"],
      reviewsData: {
        reviews: 8.2,
        basedon: 245,
      },
      rank: 18,
    },
    {
      id: 18,
      college: {
        name: "College of Engineering, Pune",
        state: "Maharashtra",
        capital: "Mumbai",
      },
      courseFee: "1,70,000",
      Placement: ["15,00,000", "1,50,00,000"],
      reviewsData: {
        reviews: 8.1,
        basedon: 240,
      },
      rank: 19,
    },
    {
      id: 19,
      college: {
        name: "PSG College of Technology",
        state: "Tamil Nadu",
        capital: "Chennai",
      },
      courseFee: "1,60,000",
      Placement: ["14,00,000", "1,45,00,000"],
      reviewsData: {
        reviews: 7.9,
        basedon: 220,
      },
      rank: 20,
    },
    {
      id: 20,
      college: {
        name: "BMS College of Engineering",
        state: "Karnataka",
        capital: "Bangalore",
      },
      courseFee: "1,75,000",
      Placement: ["14,50,000", "1,50,00,000"],
      reviewsData: {
        reviews: 7.7,
        basedon: 215,
      },
      rank: 21,
    },
    {
      id: 21,
      college: {
        name: "R.V. College of Engineering",
        state: "Karnataka",
        capital: "Bangalore",
      },
      courseFee: "2,00,000",
      Placement: ["15,50,000", "1,60,00,000"],
      reviewsData: {
        reviews: 8.0,
        basedon: 230,
      },
      rank: 22,
    },
  ]);

  const [visibleItems, setVisibleItems] = useState(5);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) =>
      Math.min(prevVisibleItems + 5, data.length)
    );
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight
    ) {
      loadMoreItems();
    }
  };

  // sorting on basis of coursefees
  const ParsingCourseFee = (fee) => Number(fee.replace(/,/g, ""));

  const handleSortFeesAsc = () => {
    const sortedData = [...data].sort(
      (a, b) => ParsingCourseFee(a.courseFee) - ParsingCourseFee(b.courseFee)
    );
    setData(sortedData);
  };
  const handleSortFeesDesc = () => {
    const sortedData = [...data].sort(
      (a, b) => ParsingCourseFee(b.courseFee) - ParsingCourseFee(a.courseFee)
    );
    setData(sortedData);
  };

  const handleSortReviewAsc = () => {
    const sortedData = [...data].sort(
      (a, b) => a.reviewsData.reviews - b.reviewsData.reviews
    );
    setData(sortedData);
  };
  const handleSortReviewDesc = () => {
    const sortedData = [...data].sort(
      (a, b) => b.reviewsData.reviews - a.reviewsData.reviews
    );
    setData(sortedData);
  };

  const handleSortCollegeAsc = () => {
    const sortedData = [...data].sort((a, b) =>
      a.college.name.localeCompare(b.college.name)
    );
    setData(sortedData);
  };
  const handleSortCollegeDesc = () => {
    const sortedData = [...data].sort((a, b) =>
      b.college.name.localeCompare(a.college.name)
    );
    setData(sortedData);
  };

  const handleColoredRow = (index) => {
    setcoloredRow(index);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>CD Rank</th>
            <th>
              Colleges{" "}
              <i
                className="fa-solid fa-arrow-up cursor"
                onClick={handleSortCollegeAsc}
              ></i>
              <i
                className="fa-solid fa-arrow-down cursor"
                onClick={handleSortCollegeDesc}
              ></i>
            </th>
            <th>
              Course Fees{" "}
              <i
                className="fa-solid fa-arrow-up cursor"
                onClick={handleSortFeesAsc}
              ></i>
              <i
                className="fa-solid fa-arrow-down cursor"
                onClick={handleSortFeesDesc}
              ></i>
            </th>
            <th>Placement</th>
            <th>
              User Reviews{" "}
              <i
                className="fa-solid fa-arrow-up cursor"
                onClick={handleSortReviewAsc}
              ></i>
              <i
                className="fa-solid fa-arrow-down cursor"
                onClick={handleSortReviewDesc}
              ></i>
            </th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleItems).map((item, index) => (
            <tr
              key={index}
              onClick={() => handleColoredRow(index)}
              className={coloredRow === index ? "table-primary" : ""}
            >
              <td>#{item.id}</td>
              <td className="w-25">
                <div className="d-flex flex-column mb-3">
                  <span className="text-info fw-bold">
                    {item?.college?.name}
                  </span>
                  <span className="spanText">
                    {item?.college?.state} {item?.college?.capital}
                  </span>
                </div>
                <div className="d-flex gap-5">
                  <div className="spanText text-warning">
                    <i className="fa-solid fa-arrow-right"></i> Apply Now
                  </div>
                  <div className="spanText text-success">
                    <i className="fa-solid fa-download"></i> Download Brouchre
                  </div>
                  <div className="spanText">
                    <input type="checkbox" className="me-1" />
                    Add To Compare
                  </div>
                </div>
              </td>
              <td style={{ width: "15%" }}>
                <div className="d-flex flex-column gap-2">
                  <span className="text-success fw-bold">{item.courseFee}</span>
                  <div className="spanText">BE/B.Tech</div>
                  <div className="spanText">- 1st Year Fees</div>
                  <div className="spanText text-warning">
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>{" "}
                    Compare Fees
                  </div>
                </div>
              </td>
              <td style={{ width: "15%" }}>
                <div className="d-flex flex-column gap-1">
                  <span className="text-success fw-bold">
                    {item.Placement[0]}
                  </span>
                  <span className="spanText">Average Package</span>
                  <span className="text-success fw-bold">
                    {item.Placement[1]}
                  </span>
                  <span className="spanText">Highest Package</span>
                </div>
                <div className="spanText text-warning">
                  <i className="fa-solid fa-arrow-right-arrow-left"></i> Compare
                  Fees
                </div>
              </td>
              <td style={{ width: "15%" }}>
                <ul>
                  <li>{item.reviewsData.reviews}/10</li>
                  <span className="spanText">
                    Based on {item.reviewsData.basedon} User Reviews
                  </span>
                  <div className="p-2">
                    <div className="rounded-pill bgdiv text-danger d-flex gap-2 align-items-center px-2">
                      <i className="fa-solid fa-check iconsize"></i>
                      <span className="spanText">Best in Social Life</span>
                      <i className="fa-solid fa-angle-down iconsize"></i>
                    </div>
                  </div>
                </ul>
              </td>
              <td>{item.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
