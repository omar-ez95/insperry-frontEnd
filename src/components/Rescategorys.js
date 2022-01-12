import React, {useState, useEffect} from "react"
import axios from "axios";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import Card from "./common/card"
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

    const cards = rescategorys.map(
        rescategory => (     
            <Card key={rescategory.id} item={rescategory} link={`/rescategory/${rescategory.name}`} />    
        ))

    return(
        <div>
                <section>
                    <div className="container-fluid">
                        <h1 className="page-name">
                            MAIN
                        </h1>
                        <Row>
                            {cards}
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