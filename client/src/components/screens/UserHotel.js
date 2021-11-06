import React from "react";
import M from "materialize";

const UserHotel = () => {
  return (
    <>
      <img
        src="data:image/jpeg;base64,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"
        alt="hotel"
      />
      <h2>Hotel Charans Plaza</h2>
      <h6>Hazratganj, Lucknow</h6>
      <h4>Discaimer</h4>
      <h5>
        Bookings for time after 1800 hrs will fall in Night Slot therefore Night
        Price will be charged
      </h5>
      <div>
        <h4>Day Slot</h4>
        <h5>Price - Rs 3000</h5>
      </div>
      <div>
        <h4>Night Slot</h4>
        <h5>Price - Rs 3200</h5>
      </div>
      <a class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">+</i>
      </a>
      <a class="waves-effect waves-dark btn #64b5f6 blue lighten-2">
        Pay Rs. 3200
      </a>
    </>
  );
};

export default UserHotel;