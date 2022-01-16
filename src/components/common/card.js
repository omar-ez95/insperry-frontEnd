import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Col xs="6" lg="3" key={props.item.id} className="res-container">
      <Link to={props.link} className="product-card">
        <img
          src={props.item.picture ? props.item.picture : props.item.profile_pic}
          alt="nofoto"
          className="w-100"
        />
        <div className="product-title">
          <p>{props.item.name}</p>
        </div>
      </Link>
    </Col>
  );
}

export default Card;
