import React, {useState, useEffect} from "react"
import axios from "axios";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import Card from "../common/card"
import {useParams} from "react-router-dom"
function RestaurantsCards(){
    const {RescategoryName} = useParams()
    const [restaurants,setRestaurants]=useState([])

    useEffect(() => {
      axios.get(`http://18.192.205.152/app/api/rescategory/${RescategoryName}`,
        { crossDomain: true },
        { withCredentials: true })
        .then(response => {
            setRestaurants( response.data)
      });

  }, [])

    const cards = restaurants.map(
        restaurant => (     
            <Card item={restaurant} link={`/rescategory/${restaurant.id}`} />    
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

RestaurantsCards.propTypes={
    restaurants: PropTypes.array
}
export default RestaurantsCards