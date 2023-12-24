import React from "react";
import "../../style/Contact.css";

const Contact = () => {

	return (
	  <div className="contact">
		<img className="contact-child" alt="" src="/line-3@2x.png" />
		
		<div className="contact-inne">
		  <div className="frame-grou">
			<div className="placebox-info-paren">
			  <div className="placebox-inf">
				<div className="place-to-info-bo" />
				<div className="md">
				  <span>{`Your Name `}</span>
				  <span className="span">*</span>
				</div>
			  </div>
			  <div className="placebox-inf">
				<div className="place-to-info-bo" />
				<div className="md">
				  <span>{`Your Email `}</span>
				  <span className="span">*</span>
				</div>
			  </div>
			  <div className="placebox-inf">
				<div className="place-to-info-bo" />
				<div className="md">
				  <span>{`Your Phone `}</span>
				  <span className="span">*</span>
				</div>
			  </div>
			</div>
			<div className="placebox-info3">
			  <div className="place-to-info-bo1" />
			  <div className="md">Your Massage</div>
			</div>
			<div className="bt">
			  <div className="view-all-product">Send Massage</div>
			</div>
		  </div>
		</div>
		<div className="frame-di">
		  <div className="frame-containe">
			<div className="logo-grou">
			  <div className="icons-phone-paren">
				<img className="icons-phon" alt="" src="/iconsphone@2x.png" />
				<div className="view-all-product">Call To Us</div>
			  </div>
			  <div className="we-are-available-247-7-days-parent">
				<div className="we-are-available">
				  We are available 24/7, 7 days a week.
				</div>
				<div className="english">Phone: +8801611112222</div>
			  </div>
			</div>
			<img className="underline-icon1" alt="" src="/underline@2x.png" />
			<div className="logo-grou">
			  <div className="icons-phon-paren">
				<img className="icons-mai" alt="" src="/iconsmail@2x.png" />
				<div className="view-all-product">Write To US</div>
			  </div>
			  <div className="we-are-available-247-7-days-parent">
				<div className="fill-out-our">
				  Fill out our form and we will contact you within 24 hours.
				</div>
				<div className="english">Emails: customer@exclusive.com</div>
				<div className="english">Emails: support@exclusive.com</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };

export default Contact;
