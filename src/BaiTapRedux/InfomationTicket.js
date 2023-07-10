import React, { Component } from "react";

export default class InfomationTicket extends Component {
  render() {
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
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className>
                  <th scope="col">Số Ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
                <tr>
                  <th scope="col">Số Ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
