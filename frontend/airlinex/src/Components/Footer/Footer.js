// import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Airlinex Green</FooterLink>
						<FooterLink href="#">Board of Directors</FooterLink>
						<FooterLink href="#">Careers</FooterLink>
						<FooterLink href="#">Leadership Team</FooterLink>
						{/* <FooterLink href="#">Investor Relations</FooterLink> */}
						<FooterLink href="#">Press Releases</FooterLink>
						{/* <FooterLink href="#">Transgender Persons Policy</FooterLink> */}
						<FooterLink href="#">Our Awards</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						{/* <FooterLink href="#">Special Disability Assistance</FooterLink> */}
						<FooterLink href="#">Medical Assistance</FooterLink>
						<FooterLink href="#">Seat Select</FooterLink>
						<FooterLink href="#">Gift Voucher</FooterLink>
						{/* <FooterLink href="#">6E Tiffin</FooterLink> */}
						<FooterLink href="#">Add-ons & Services</FooterLink>
						<FooterLink href="#">Baggage</FooterLink>
					</Column>
					<Column>
						<Heading>Quick Links</Heading>
						<FooterLink href="#">Offers</FooterLink>
						
						<FooterLink href="#">Advertise with us</FooterLink>
						<FooterLink href="#">Destinations</FooterLink>
						<FooterLink href="#">Terms and Conditions</FooterLink>
						{/* <FooterLink href="#">Conditions of Carriage</FooterLink> */}
						<FooterLink href="#">Privacy Policy</FooterLink>
						<FooterLink href="#">Disclaimer</FooterLink>
						<FooterLink href="#">International Travel Tips</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: "10px" }}>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
				<br />
				<Row>
					&copy; 2022 Airlinex. All rights reserved.
				</Row>
				
			</Container>
		</Box>
	);
};
export default Footer;
