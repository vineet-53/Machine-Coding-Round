import { useEffect, useRef, useState } from "react";
import Container from "../components/common/Container";
import StickyLogo from "../components/common/StickyLogo";
import { batches } from "../data/batches.data.js";
import SearchBar from "../components/common/SearchBar.jsx";
import Tables from "../components/core/Batches/Tables.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Batches() {
  const searchInutRef = useRef(null);
  const [start, setStart] = useState(0);
  const [size, setSize] = useState(10);
  const [limitExceed, setLimitExceed] = useState(false);
  const [currentBatchSize, setCurrentBatchSize] = useState(size);
  const giveDataPerPage = (start, size) => {
    if (batches.data?.slice(start, size)) {
      return batches.data.slice(start, size);
    } else {
      setLimitExceed(true);
    }
  };
  const [batchesData, setBatchData] = useState([]);
  const changePageDataPrev = () => {
    if (start - currentBatchSize >= 0) {
      setStart(start - currentBatchSize);
      setSize(size - currentBatchSize);
    }
  };

  const changePageDataNext = () => {
    if (!limitExceed && start + currentBatchSize && size + currentBatchSize) {
      setStart(start + currentBatchSize);
      setSize(size + currentBatchSize);
    }
  };
  const handleSearch = (e) => {};
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.metaKey && event.key === "k") ||
        (event.altKey && event.key === "k")
      ) {
        searchInutRef.current.focus();
      }
      if (event.key == "Escape") {
        searchInutRef.current.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      setBatchData(giveDataPerPage(start, size));
    };
  }, []);
  useEffect(() => {
    const newBatchData = giveDataPerPage(start, size);
    setBatchData(newBatchData);
    if (newBatchData.length < currentBatchSize) {
      console.log("setting new data to end");
      setLimitExceed(true);
    } else {
      setLimitExceed(false);
    }
  }, [start, size, currentBatchSize, limitExceed]);
  return (
    <div className="flex-col gap-y-3 bg-batches-primary justify-center items-center py-10 min-h-screen justify-center max-lg:px-4 items-center flex">
      <h1 className="text-center mb-14  text-batches-secondary font-extrabold text-5xl md:text-7xl">
        {batches.heading}
      </h1>
      <Container
        title={batches.title}
        subTitle={batches.subTitle}
        batches={true}
      >
        <SearchBar onSearch={handleSearch} ref={searchInutRef} />
        <Tables tableHead={batches.head} tableData={batchesData} />
        <div className="flex justify-end">
          <div className="justify-center items-center flex gap-3">
            <p>Row Per Page</p>
            <select
              name="rows"
              id="selectRows"
              onChange={(e) => {
                const batchSize = parseInt(e.target.value);
                setCurrentBatchSize(batchSize);
                setSize(batchSize);
              }}
              className="py-2 px-3"
            >
              <option value="10">10</option>
              <option value="8">8</option>
              <option value="5">5</option>
            </select>
            <button
              onClick={changePageDataPrev}
              className={`${start < currentBatchSize && "text-[#D6D6D6]"} text-2xl`}
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={changePageDataNext}
              className={`text-2xl ${limitExceed && "text-[#D6D6D6]"}`}
              disabled={limitExceed}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </Container>

      <StickyLogo styles="left-[100%] md:left-[89%] bottom-10" />
    </div>
  );
}
