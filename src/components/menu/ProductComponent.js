
import React, { useState, useContext, useEffect,lazy, Suspense } from 'react';
import { Col, Row,  } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';
import loadable from '@loadable/component'

import commentBtn from "../../static/img/commentBtn.png";
import ProfilePhoto from "../profile/ProfilePhoto";

import Toggler from "../../customHooks/Toggler"
import {Context} from '../../contexts/UserContext'

const FavoriteProduct = loadable(() => import('./FavoriteProduct'));
const ProductComments = loadable(() => import('../comments/ProductComments'));







const renderLoader = () => <p>Loading</p>;
function ProductComponent ({product}) {

    const [show, toggle] = Toggler()
    const {user, isAuthenticated, token} = useContext(Context)

    useEffect(()=>{

    },[product])

        return (
            <div>
                <Row>
                    <Col xs="7" lg="7">
                    <h1>{product.name}</h1>
                    </Col>
                    <Col xs="2" lg="2">
                     <FavoriteProduct key={product.pk != undefined ? product.pk : product.id} id={product.pk != undefined ? product.pk : product.id} />
                        </Col>
                    <Col xs="2" lg="2">
                    { 
                    isAuthenticated   ? <img className="buttons-color" src={commentBtn} onClick={toggle} /> :
                    <Link to="/login" >          
                        <img  className="buttons-color" src={commentBtn} alt=""/> 
                    </Link> 
                } 
                        
                    </Col>
                </Row>
                
                <p>{product.description}</p>
                <hr/>
                <Row>
                    <Col xs="8" lg="8">
                    {product.price1_info}
                    </Col>
                    <Col xs="4" lg="4">
                        <Row>
                        <Col xs="6" lg="6">
                            {product.price1}
                        </Col>
                        <Col xs="6" lg="6">
                            €
                        </Col>
                        </Row>
                    </Col>
                </Row>
                
                 <div>
                    
                    {show ?<ProductComments id={product.pk != undefined ? product.pk : product.id} restaurant={product.restaurant} /> : null}
                </div> 
                
            </div>
          
        );
    
}

export default ProductComponent;