import { useCallback } from 'react';
import '../../style/Contact.css';


const Contact = () => {
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="contact">
      			<div className="top-header">
        				<div className="frame-parent">
          					<div className="summer-sale-for-all-swim-suits-parent">
            						<div className="summer-sale-for">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
            						<div className="shopnow">ShopNow</div>
          					</div>
          					<div className="english-parent">
            						<div className="english">English</div>
            						<img className="dropdown-icon" alt="" src="DropDown.png" />
          					</div>
        				</div>
      			</div>
      			<div className="header">
        				<div className="logo-parent">
          					<div className="logo">
            						<b className="exclusive">Exclusive</b>
          					</div>
          					<div className="header-parent">
            						<div className="header1">
              							<div className="home" onClick={onHomeTextClick}>Home</div>
            						</div>
            						<div className="header2">
              							<div className="exclusivegmailcom">Contact</div>
              							<img className="underline-icon" alt="" src="UnderLine.png" />
            						</div>
            						<div className="header1">
              							<div className="about">About</div>
            						</div>
            						<div className="header4">
              							<div className="about">Sign Up</div>
            						</div>
          					</div>
        				</div>
        				<div className="search-component-set-parent">
          					<div className="search-component-set">
            						<div className="what-are-you-looking-for-parent">
              							<div className="what-are-you">What are you looking for?</div>
                								<img className="dropdown-icon" alt="" src="Component 2.png" />
                								</div>
                								</div>
                								<div className="wishlist-parent">
                  									<img className="wishlist-icon" alt="" src="Wishlist.png" />
                  									<img className="cart1-with-buy" alt="" src="Cart1 with buy.png" />
                  									<img className="wishlist-icon" alt="" src="user.png" />
                								</div>
                								</div>
                								</div>
                								<img className="contact-child" alt="" src="Line 3.png" />
                								<div className="roadmap">
                  									<div className="account">Home</div>
                  									<img className="roadmap-child" alt="" src="Line 13.png" />
                  									<div className="english">Cantact</div>
                								</div>
                								<div className="contact-inner">
                  									<div className="frame-group">
                    										<div className="placebox-info-parent">
                      											<div className="placebox-info">
                        												<div className="place-to-info-box" />
                        												<div className="md">
                          													<span>{`Your Name `}</span>
                          													<span className="span">*</span>
                        												</div>
                      											</div>
                      											<div className="placebox-info">
                        												<div className="place-to-info-box" />
                        												<div className="md">
                          													<span>{`Your Email `}</span>
                          													<span className="span">*</span>
                        												</div>
                      											</div>
                      											<div className="placebox-info">
                        												<div className="place-to-info-box" />
                        												<div className="md">
                          													<span>{`Your Phone `}</span>
                          													<span className="span">*</span>
                        												</div>
                      											</div>
                    										</div>
                    										<div className="placebox-info3">
                      											<div className="place-to-info-box" />
                      											<div className="md">Your Massage</div>
                    										</div>
                    										<div className="button">
                      											<div className="view-all-products">Send Massage</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="frame-div">
                  									<div className="frame-container">
                    										<div className="logo-group">
                      											<div className="icons-phone-parent">
                        												<img className="icons-phone" alt="" src="icons-phone.png" />
                        												<div className="view-all-products">Call To Us</div>
                      											</div>
                      											<div className="we-are-available-247-7-days-parent">
                        												<div className="we-are-available">We are available 24/7, 7 days a week.</div>
                        												<div className="english">Phone: +8801611112222</div>
                      											</div>
                    										</div>
                    										<img className="underline-icon1" alt="" src="UnderLine.png" />
                    										<div className="logo-group">
                      											<div className="icons-phone-parent">
                        												<img className="icons-mail" alt="" src="icons-mail.png" />
                        												<div className="view-all-products">Write To US</div>
                      											</div>
                      											<div className="we-are-available-247-7-days-parent">
                        												<div className="fill-out-our">Fill out our form and we will contact you within 24 hours.</div>
                        												<div className="english">Emails: customer@exclusive.com</div>
                        												<div className="english">Emails: support@exclusive.com</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="footer">
                  									<div className="underline-parent">
                    										<img className="underline-icon2" alt="" src="UnderLine.png" />
                    										<div className="frame-wrapper">
                      											<div className="icon-copyright-parent">
                        												<img className="icon-copyright" alt="" src="icon-copyright.png" />
                        												<div className="exclusivegmailcom">Copyright Rimel 2022. All right reserved</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="frame-parent3">
                    										<div className="frame-parent4">
                      											<div className="logo-group">
                        												<div className="logo-group">
                          													<div className="logo">
                            														<b className="exclusive">Exclusive</b>
                          													</div>
                          													<div className="subscribe">Subscribe</div>
                        												</div>
                        												<div className="get-10-off">Get 10% off your first order</div>
                      											</div>
                      											<div className="send-mail">
                        												<div className="enter-your-email">Enter your email</div>
                        												<img className="dropdown-icon" alt="" src="icon-send.png" />
                      											</div>
                    										</div>
                    										<div className="logo-group">
                      											<div className="support">Support</div>
                      											<div className="bijoy-sarani-dhaka-dh-1515-parent">
                        												<div className="bijoy-sarani-dhaka">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
                        												<div className="exclusivegmailcom">exclusive@gmail.com</div>
                        												<div className="exclusivegmailcom">+88015-88888-9999</div>
                      											</div>
                    										</div>
                    										<div className="logo-group">
                      											<div className="support">Account</div>
                      											<div className="bijoy-sarani-dhaka-dh-1515-parent">
                        												<div className="exclusivegmailcom">My Account</div>
                        												<div className="exclusivegmailcom">Login / Register</div>
                        												<div className="exclusivegmailcom">Cart</div>
                        												<div className="exclusivegmailcom">Wishlist</div>
                        												<div className="exclusivegmailcom">Shop</div>
                      											</div>
                    										</div>
                    										<div className="logo-group">
                      											<div className="support">Quick Link</div>
                      											<div className="bijoy-sarani-dhaka-dh-1515-parent">
                        												<div className="exclusivegmailcom">Privacy Policy</div>
                        												<div className="exclusivegmailcom">Terms Of Use</div>
                        												<div className="exclusivegmailcom">FAQ</div>
                        												<div className="exclusivegmailcom">Contact</div>
                      											</div>
                    										</div>
                    										<div className="logo-group">
                      											<div className="logo-group">
                        												<div className="support">Download App</div>
                        												<div className="save-3-with-app-new-user-only-parent">
                          													<div className="save-3-with">Save $3 with App New User Only</div>
                          													<div className="summer-sale-for-all-swim-suits-parent">
                            														<div className="qr-code">
                              															<div className="wrapper-qrcode-1">
                                																<img className="qrcode-1-icon" alt="" src="Qrcode 1.png" />
                              															</div>
                            														</div>
                            														<div className="googleplay-parent">
                              															<img className="googleplay-icon" alt="" src="GooglePlay.png" />
                              															<div className="appstore">
                                																<img className="download-appstore-icon" alt="" src="download-appstore.png" />
                              															</div>
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className="icon-facebook-parent">
                        												<img className="dropdown-icon" alt="" src="Icon-Facebook.png" />
                        												<img className="dropdown-icon" alt="" src="Icon-Twitter.png" />
                        												<img className="dropdown-icon" alt="" src="icon-instagram.png" />
                        												<img className="dropdown-icon" alt="" src="Icon-Linkedin.png" />
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								</div>);
              							};
              							
              							export default Contact;
              							