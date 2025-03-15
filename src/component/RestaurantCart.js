import { CDN_URL } from "../utils/constant";

const RestaurantCart = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
      resData?.info;
  
    return (
      <div
        className="res-cart"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          className="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} star</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantCart