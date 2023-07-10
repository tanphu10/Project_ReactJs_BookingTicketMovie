import React, { Component, Fragment } from "react";
import "./style.css";
import InfomationTicket from "./InfomationTicket";
import { connect } from "react-redux";

import HangGhe from "./HangGhe";

class BookingTicket extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgstart.jpg",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className=" text-light  fs-2">
                  BOOKING TICKET CINEMA.VN
                </div>
                <div className="my-2 text-white">Màn Hình</div>
                <div className="my-1 d-flex flex-column justify-content-center">
                  <div className="screen ms-5"></div>
                  {this.props.product.arrProduct.map((item, index) => {
                    return (
                      <HangGhe item={item} soHangGhe={index} key={index} />
                    );
                  })}
                </div>
              </div>
              <div className="col-4 ">
                <div
                  className="text-white mb-3 text-center"
                  style={{ fontSize: "30px" }}
                >
                  Danh Sách Ghế Đã Chọn
                </div>
                <InfomationTicket />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// kết nối với redux
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps)(BookingTicket);
