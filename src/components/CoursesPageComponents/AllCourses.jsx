import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GridLoader } from "react-spinners";


export default function AllCourses() {
  const [suggestedCourses, setSuggestedCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading
  let [color, setColor] = useState("#FF0000");

  // all changed

  useEffect(() => {
    axios
      .get("https://itlive.introdevs.site/api/courses")
      .then((res) => {
        setSuggestedCourses(res.data.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
}, []);

  const override = {
    display: "block",
    margin: "30px auto",
    borderColor: "red",
  };


  return (
    <div>
      {/* Render loading indicator while loading */}
      {loading && (
        <GridLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 border-1">
        {suggestedCourses.map((video) => {
          return (
            <Link
              to={`/courses/single/${video.id}`}
              key={video.id}
              className=" col-span-1 py-3 sm:p-5 rounded-md flex flex-col justify-center bg-white shadow-xl"
            >
              <img
                className="h-[250px]"
                src={
                  "https://itlive.introdevs.site/files/public/" + video.banner
                }
                alt="course img"
              />
              <div className="px-3 sm:px-0">
                <h1 className="my-4 font-bold text-plum">{video.name}</h1>
                <p className="h-1 w-12 bg-cherry"></p>
                <p className="my-3 text-mutedtxt">about</p>
                <div className="flex gap-5 justify-between items-baseline">
                  <button className="bg-cherry mt-3 text-white w-1/2 md:w-[200px] py-4 rounded active:text-deep-orange-50">
                    Kursni boshlash
                  </button>
                  <span className="text-plum font-bold relative top-4">
                    {video.price} ming
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
