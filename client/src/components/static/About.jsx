import { useCallback } from 'react';
import '../../style/About.css';


const About = () => {
  	
  	const onHeaderContainer1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className="about">
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
              							<div className="home">Home</div>
            						</div>
            						<div className="header2" onClick={onHeaderContainer1Click}>
              							<div className="home">Contact</div>
            						</div>
            						<div className="header3">
              							<div className="exclusivegmailcom">About</div>
              							<img className="underline-icon" alt="" src="UnderLine.png" />
            						</div>
            						<div className="header4">
              							<div className="home">Sign Up</div>
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
                								<img className="about-child" alt="" src="Line 3.png" />
                								<div className="roadmap">
                  									<div className="account">Home</div>
                  									<img className="roadmap-child" alt="" src="Line 13.png" />
                  									<div className="english">About</div>
                								</div>
                								<div className="our-story-parent">
                  									<div className="our-story">Our Story</div>
                  									<div className="launced-in-2015-exclusive-is-parent">
                    										<div className="launced-in-2015">{`Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. `}</div>
                    										<div className="exclusive-has-more">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</div>
                  									</div>
                								</div>
                								<div className="side-image">
                  									<img className="portrait-two-african-females-h-icon" alt="" src="portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png" />
                								</div>
                								<div className="full-services">
                  									<div className="services-parent">
                    										<img className="services-icon" alt="" src="Services.png" />
                    										<div className="free-and-fast-delivery-parent">
                      											<div className="free-and-fast">FREE AND FAST DELIVERY</div>
                      											<div className="free-delivery-for">Free delivery for all orders over $140</div>
                    										</div>
                  									</div>
                  									<div className="services-group">
                    										<img className="services-icon" alt="" src="Services.png" />
                    										<div className="customer-service-parent">
                      											<div className="free-and-fast">24/7 CUSTOMER SERVICE</div>
                      											<div className="friendly-247-customer">Friendly 24/7 customer support</div>
                    										</div>
                  									</div>
                  									<div className="services-parent">
                    										<img className="services-icon" alt="" src="Services.png" />
                    										<div className="free-and-fast-delivery-parent">
                      											<div className="free-and-fast">MONEY BACK GUARANTEE</div>
                      											<div className="friendly-247-customer">We reurn money within 30 days</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="frame-group">
                  									<div className="instance-wrapper">
                    										<div className="frame-div">
                      											<img className="services-icon" alt="" src="Services.png" />
                      											<div className="free-and-fast-delivery-group">
                        												<b className="free-and-fast1">{`10.5k `}</b>
                        												<div className="free-delivery-for1">Sallers active our site</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="instance-container">
                    										<div className="services-parent1">
                      											<img className="services-icon" alt="" src="Services.png" />
                      											<div className="free-and-fast-delivery-parent">
                        												<b className="free-and-fast1">33k</b>
                        												<div className="founder-chairman">Mopnthly Produduct Sale</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="instance-wrapper">
                    										<div className="services-parent2">
                      											<img className="services-icon" alt="" src="Services.png" />
                      											<div className="customer-service-group">
                        												<b className="free-and-fast1">45.5k</b>
                        												<div className="founder-chairman">Customer active in our site</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="instance-wrapper">
                    										<div className="services-parent3">
                      											<img className="services-icon" alt="" src="Services.png" />
                      											<div className="free-and-fast-delivery-group">
                        												<b className="free-and-fast1">25k</b>
                        												<div className="founder-chairman">Anual gross sale in our site</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="frame-container">
                  									<div className="frame-parent1">
                    										<div className="image-46-wrapper">
                      											<img className="image-46-icon" alt="" src="image 46.png" />
                    										</div>
                    										<div className="frame-parent2">
                      											<div className="tom-cruise-parent">
                        												<div className="tom-cruise">Tom Cruise</div>
                        												<div className="founder-chairman">{`Founder & Chairman`}</div>
                      											</div>
                      											<div className="icon-twitter-parent">
                        												<img className="dropdown-icon" alt="" src="Icon-Twitter.png" />
                        												<img className="dropdown-icon" alt="" src="icon-instagram.png" />
                        												<img className="dropdown-icon" alt="" src="Icon-Linkedin.png" />
                      											</div>
                    										</div>
                  									</div>
                  									<div className="frame-parent1">
                    										<div className="image-46-wrapper">
                      											<img className="image-51-icon" alt="" src="image 51.png" />
                    										</div>
                    										<div className="frame-parent2">
                      											<div className="tom-cruise-parent">
                        												<div className="tom-cruise">Emma Watson</div>
                        												<div className="founder-chairman">Managing Director</div>
                      											</div>
                      											<div className="icon-twitter-parent">
                        												<img className="dropdown-icon" alt="" src="Icon-Twitter.png" />
                        												<img className="dropdown-icon" alt="" src="icon-instagram.png" />
                        												<img className="dropdown-icon" alt="" src="Icon-Linkedin.png" />
                      											</div>
                    										</div>
                  									</div>
                  									<div className="frame-parent1">
                    										<div className="image-46-wrapper">
                      											<img className="image-47-icon" alt="" src="image 47.png" />
                    										</div>
                    										<div className="frame-parent2">
                      											<div className="tom-cruise-parent">
                        												<div className="tom-cruise">Will Smith</div>
                        												<div className="founder-chairman">Product Designer</div>
                      											</div>
                      											<div className="icon-twitter-parent">
                        												<img className="dropdown-icon" alt="" src="Icon-Twitter.png" />
                        												<img className="dropdown-icon" alt="" src="icon-instagram.png" />
                        												<img className="dropdown-icon" alt="" src="Icon-Linkedin.png" />
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className="ellipse-parent">
                  									<div className="frame-child" />
                  									<div className="frame-child" />
                  									<img className="frame-inner" alt="" src="Group 1000005940.png" />
                  									<div className="frame-child" />
                  									<div className="frame-child" />
                								</div>
                								<div className="footer">
                  									<div className="underline-parent">
                    										<img className="underline-icon1" alt="" src="UnderLine.png" />
                    										<div className="frame-wrapper">
                      											<div className="icon-copyright-parent">
                        												<img className="icon-copyright" alt="" src="icon-copyright.png" />
                        												<div className="exclusivegmailcom">Copyright Rimel 2022. All right reserved</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className="frame-parent7">
                    										<div className="frame-parent8">
                      											<div className="logo-group">
                        												<div className="logo-group">
                          													<div className="logo">
                            														<b className="exclusive">Exclusive</b>
                          													</div>
                          													<div className="subscribe">Subscribe</div>
                        												</div>
                        												<div className="founder-chairman">Get 10% off your first order</div>
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
              							
              							export default About;
              							