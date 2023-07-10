import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.item.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }
      // xét tình trạng ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.product.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat != -1) {
        cssGheDangDat = "gheDangChon";
      }
      console.log(ghe);
      return (
        <button
          onClick={() => {
            this.props.addGhe(ghe);
          }}
          disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderspan = () => {
    return this.props.item.danhSachGhe.map((span, index) => {
      return (
        <button className="rowNumber" key={index}>
          {span.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="me-4" style={{ marginLeft: "25px" }}>
          {this.props.item.hang} {this.renderspan()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.item.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    console.log(this.props.item);
    return (
      <div
        className="text-light ms-5"
        style={{ textAlign: "left", fontSize: "25px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
//  kết nối với redux
const mapStateToProps = (state) => {
  return {
    product: state.product.listGheDangDat,
  };
};
const mapDishpatchToProps = (dispatch) => {
  return {
    addGhe: (ghe) => {
      const action = {
        type: "DATGHE",
        ghe,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDishpatchToProps)(HangGhe);
