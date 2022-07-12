import React, {useState, useEffect} from "react";
import {useFetch} from "./useFetch";
import Follower from "./Follower";

// react icons
import {FcNext} from "react-icons/fc";
import {FcPrevious} from "react-icons/fc";

function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  // when loading changes, re-run my callback function

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((currentPage) => {
      let nextPage = currentPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const previousPage = () => {
    setPage((currentPage) => {
      let previousPage = currentPage - 1;
      if (previousPage < 0) {
        previousPage = data.length - 1;
      }
      return previousPage;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        {!loading && <div className="underline"></div>}
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={previousPage}>
              <FcPrevious />
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${
                    index === page ? "active-btn" : null
                  }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              <FcNext />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
