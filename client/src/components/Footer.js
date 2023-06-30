import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    bottom: "0",
    marginTop:"3rem"
  };

  const miniFooterStyle = {
    backgroundColor: "#f2f2f2",
    borderTop: "1px solid #e0e0e0",
    padding: "10px",
    fontSize: "12px",
    textAlign: "center",
  };

  return (
    <div className="container text-center footer" style={footerStyle}>
      <div className="row">
        <div className="col-sm mt-5">
          <h3>About</h3>
          <ul className="footerlist">
            <li>How site works?</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>GetSetBook Plus</li>
            <li>GetSetBook Luxury</li>
          </ul>
        </div>
        <div className="col-sm mt-5">
          <h3>Community</h3>
          <ul className="footerlist">
            <li>Diversity &amp; Belonging</li>
            <li>Accessibility</li>
            <li>Associates</li>
            <li>Frontline Stays</li>
            <li>Referrals</li>
          </ul>
        </div>
        <div className="col-sm mt-5">
          <h3>Support</h3>
          <ul className="footerlist">
            <li>Our Covid-19 response</li>
            <li>Help Centre</li>
            <li>Cancellation Options</li>
            <li>Neighbourhood Support</li>
            <li>Trust &amp; Safety</li>
          </ul>
        </div>
      </div>
      <div className="mini-footer" style={miniFooterStyle}>
        &copy; 2023 <b>Hoteland</b>. All Rights Reserved.
      </div>
    </div>
  );
}
