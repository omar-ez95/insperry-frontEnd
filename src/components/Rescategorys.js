import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import Card from "./common/card";
function Rescategorys() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryPerPage] = useState(4);
  const [rescategorys, setRescategorys] = useState([]);
  const [totalRescategorys, setTotalRescategorys] = useState(0);
  const [showCategory, setShowCategory] = useState([]);

  const pageNumbers = Math.ceil(totalRescategorys / categoryPerPage);
  useEffect(() => {
    axios
      .get(
        "http://18.192.205.152/api/rescategorys/",
        { crossDomain: true },
        { withCredentials: true }
      )
      .then((response) => {
        setRescategorys(response.data);
        setTotalRescategorys(response.data.length);
      });
  }, []);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if(currentPage +1 > pageNumbers)return
    if (scrollHeight - scrollTop === clientHeight) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadCategorys = async () => {
      setLoading(true);
      const indexOfLastCategory = currentPage * categoryPerPage;
      const indexOfFirstCategory = indexOfLastCategory - categoryPerPage;
      const currentCategorys = rescategorys.slice(indexOfFirstCategory, indexOfLastCategory);
      setShowCategory((prev) => [...prev, ...currentCategorys]);
      setLoading(false);
    };
    loadCategorys();
  }, [currentPage,rescategorys,categoryPerPage]);

  const cards = showCategory.map((rescategory) => (
    <Card
      key={rescategory.id}
      item={rescategory}
      link={`/rescategory/${rescategory.name}`}
    />
  ));

  return (
    <div>
      <section>
        <div className="container-fluid" onScroll={handleScroll}>
          <h1 className="page-name">MAIN</h1>
          <Row >
            {cards}
          </Row>
          {loading && <h1>Loading ...</h1>}
        </div>
      </section>
    </div>
  );
}

Rescategorys.propTypes = {
  rescategorys: PropTypes.array,
};
export default Rescategorys;
