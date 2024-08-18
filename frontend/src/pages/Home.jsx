import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cards/get-cards`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "No data found")
          alert("Data featching error - No data to fetch | Add a card");
        else alert("Data featching error " + err.response.data.message);
      });
  };

  const handleSearch = () => {
    if (!searchInput) {
      alert("Enter some data before search");
      if (!data) {
        fetchAll();
      }
    } else
      axios(`${import.meta.env.VITE_BACKEND_URL}/cards/get-card/${searchInput}`)
        .then((res) => {
          console.log(res);
          if (!res.data.data.length) alert("No data found");
          else {
            setData(res.data.data);
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Data featching error " + err.response.data.message);
        });
  };

  return (
    <div>
      <div className="w-full bg-[#dadbf0] flex justify-center items-center min-h-[300px]">
        <div className="w-fit">
          <h1 className="text-center text-2xl sm:text-5xl font-semibold mb-7">
            How can we help?
          </h1>
          <div className="w-fit flex flex-col sm:flex-row justify-center mx-auto gap-2">
            <input
              type="text"
              className="w-[260px] sm:w-[400px] border-solid border-2 border-gray-400 px-4 py-1 rounded-lg outline-none"
              placeholder="Search by title"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div
              className="mx-auto w-fit bg-white flex items-center font-bold  border-solid border-2 border-gray-400 px-6 sm:px-10 py-1 sm:py-2 rounded-lg cursor-pointer hover:bg-gray-400 hover:text-white"
              onClick={handleSearch}
            >
              Search
            </div>
          </div>
          <p
            className="text-center mt-3 underline text-blue-600 cursor-pointer"
            onClick={fetchAll}
          >
            View all Cards
          </p>
        </div>
      </div>
      <div className="min-h-[calc(100vh-380px)] flex justify-center items-center">
        {data.length == 0 ? (
          <div className="">
            <p className="text-3xl font-semibold text-gray-500 mb-4">
              No Data To Show
            </p>
            <div className="min-w-[200px]">
              <div
                className="border-solid w-fit border-gray-600 border-2 py-2 px-4 rounded-lg hover:bg-gray-600 hover:text-white font-semibold box-border cursor-pointer mx-auto"
                onClick={() => navigate("/addCard")}
              >
                Submit a request
              </div>
            </div>
          </div>
        ) : (
          <div className="w-11/12 flex flex-wrap justify-center gap-4 my-8">
            {data?.map((el) => (
              <Card
                key={el.title}
                title={el.title}
                description={el.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
