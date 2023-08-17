import React, { memo } from "react";
import { Container, Grid } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";

import { Link } from "react-router-dom"

import "./Header.scss";

const Header = () => {

	return (
		<div>
			<header>
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={7}>
							<div className="linksDiv">
								<h2>HYPERPC</h2>
								<h3>Home</h3>
								<h3>About</h3>
								<h3>Contacts</h3>
								<h3>Models</h3>
							</div>
						</Grid>
						<Grid item xs={5}>
							<div id="info">
								<h3><NearMeIcon></NearMeIcon> <p>USA California</p></h3>
								<h4>+1 (123) 456-7890</h4>
							</div>
							<div id="registration">
								<Link to="/login" className="links"> Sign In </Link>
								<Link to="register" className="links"> Sign Up</Link>
							</div>
						</Grid>
					</Grid>
				</Container>
			</header>
		</div>
	);
};

export default memo(Header);