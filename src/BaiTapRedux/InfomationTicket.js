import React, { Component } from "react";
import { connect } from "react-redux";
import { HUY_GHE } from "../redux/types/productTypes";
import { huyGheAction } from "../redux/actions/productAction";
class InfomationTicket extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span style={{ color: "white", fontSize: "15px" }}>ghế đã đặt</span>
          <br />
          <button className="gheDangChon" style={{ marginLeft: "0" }}></button>
          <span style={{ color: "white", fontSize: "15px" }}>ghế đang đặt</span>
          <br />
          <button className="ghe" style={{ marginLeft: "0" }}></button>
          <span style={{ color: "white", fontSize: "15px" }}>ghế chưa đặt</span>
        </div>
        <div>
          <div className="table-responsive">
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col">Số Ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Hủy</th>
                </tr>
              </thead>
              <tbody>
                {this.props.listGheDangDat.map((gheDangDat, index) => {
                  return (
                    <tr className="text-primary" key={index}>
                      <td>{gheDangDat.soGhe}</td>
                      <td>{gheDangDat.gia.toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => {
                            this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                          }}
                          className="text-warning bg-dark"
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <td>Tổng Tiền là:</td>
                <td>
                  {this.props.listGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td>VNĐ</td>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listGheDangDat: state.product.listGheDangDat,
  };
};
export default connect(mapStateToProps)(InfomationTicket);
