import React, {useState, useEffect} from "react"
import axios from "axios";
import PropTypes from "prop-types";
import { Col, Row, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Rescategorys(){

    const [rescategorys,setRescategorys]=useState([])

    useEffect(() => {
      axios.get('http://18.192.205.152/api/rescategorys/',
        { crossDomain: true },
        { withCredentials: true })
        .then(response => {
            setRescategorys( response.data)
      });

  }, [])


    return(
        <div>
                
                <section>
                    <div className="container-fluid">
                        <h1 className="page-name">
                            MAIN
                        </h1>
                        <Row>
                            {
                                rescategorys.map(
                                    rescategory => (         
                                        <Col xs="6" lg="3" key={ rescategory.id } className="res-container">
                                            <Link to={`/rescategory/${rescategory.id}`} className="product-card">
                                                <img src={rescategory.picture} alt="nofoto"  className="w-100" />
                                                <div className="product-title">
                                                    <p>{ rescategory.name }</p>
                                                </div>
                                            </Link>
                                        </Col>
                                    ))
                            }
                        </Row>
                    </div>
                </section>
            </div>
    )
}

Rescategorys.propTypes={
    rescategorys: PropTypes.array
}
export default Rescategorys