import React from "react";
// import { ExcuseCard, Excuses } from "../../layouts/excuses.js";
// import BTable from "react-bootstrap/Table";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

const NumberPoints = (props) => {
  return (
    <li> 
      <p class="cta-text mb-2" style={{ fontWeight: '400', fontSize: '110%' }} align="justify"> {props.children} </p>
    </li>
  )
}

function PayRegFee() {
  return (
    <section>
      <div class="container">
        <div className="titleStyle1"> Pay Registration </div>
        <div className="titleStyle2"> Fees </div>
        {/* <div class="divider" style={{ marginBottom: "30px" }}></div>
        {ExcuseCard(Excuses.TBU)} */}
        <div class="divider" style={{ marginBottom: "30px" }}></div>
        <div>
          <h3 style={{ textAlign: 'left' }} > INSTRUCTIONS </h3>
        </div>
        <ol>
          <NumberPoints> For making payment, click on below <b> PAY CONFERENCE FEES </b> link. It will direct you to SBI Collect Page. </NumberPoints>
          <NumberPoints> After accepting terms and conditions, choose the following options: 
            <ul>
              <li> State of Corporate/Institution:  <b> Goa  </b> </li>
              <li> Type of Corporate/Institution: <b> Educational Institutions </b> </li>
              <li> Educational Institution's Name: <b> BIRLA INSTITUTE OF TECHNOLOGY AND SCIENCE </b> </li>
              <li> Select Payment Category: <b> (choose ONE from following options ONLY) </b>
                <ul>
                  <li> <b> ICMC 23-Faculty </b> </li>
                  <li> <b> ICMC 23-Industry or R&D Organisation </b> </li>
                  <li> <b> ICMC 23-Presentation </b> </li>
                  <li> <b> ICMC 23-Student </b> </li>
                </ul>
              </li>
              <li> Enter the required details as asked.  </li>
            </ul>
          </NumberPoints>
          <NumberPoints> After successful payment, upload your receipt along with some other details <b> UPLOAD PAYMENT RECEIPT </b> link. </NumberPoints>
        </ol>

          <div className="d-flex justify-content-around">
            <a rel="nopener noreferrer" target="_blank" href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm" class="black-button"> PAY CONFERENCE FEES </a>
            <a rel="nopener noreferrer" target="_blank" href="https://forms.gle/K1fB1b4vqwyq6Sf78" class="black-button"> UPLOAD PAYMENT RECEIPT </a>
          </div>

      </div>
      <div class="box" style={{ minHeight: "40px" }}></div>
    </section>
  );
}

export default PayRegFee;

