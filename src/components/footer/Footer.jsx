import React from "react";

import "./footer.scss";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='f-container'>
				<div className='f-container__img-wrapper mb-small'>
					<img
						loading='lazy'
						className='f-container__logo'
						src='/logo.png'
						alt='logo-pic'
					/>
				</div>

				<h3>Copyright &copy; coolmovies 2021 | All Rights Reserved </h3>
			</div>
		</div>
	);
};

export default Footer;
