import React from 'react'
import { StyledMainFooterContainer, StyledStaticEmailSignupContainer, StyledFloatingSignupContainer, StyledEmailSignupLabel, StyledFloatingSignupExit, StyledEmailSignupInput, StyledEmailSignupButton, StyledFooterSocialIconsContainer, StyledFooterNavigationContainer, StyledFooterLinks, StyledFooterCopyrightContainer, StyledIconContainer, StyledLeftFooterContainer, StyledRightFooterContainer } from './FooterComponentStyles';
import { Link } from 'react-router-dom';

const Footer = ({showEmailSignup, footerExitHandler}) => {
	
	const EmailSignup = () => {
		return (
			<>
				<StyledEmailSignupLabel htmlFor="subEmail">
					Stay up to date!
				</StyledEmailSignupLabel>
				<StyledEmailSignupInput placeholder="Email Address" id="subEmail" name="subEmail">
				</StyledEmailSignupInput>
				<StyledEmailSignupButton type="submit">
					<i className="fa fa-paper-plane"></i>
				</StyledEmailSignupButton>
			</>
		)
	}


	//Exiting float should set state to hidden 
	const FloatingEmailSignup = () => {
		if (showEmailSignup) {
			return (
				<StyledFloatingSignupContainer className="fixed-bottom">
					<StyledFloatingSignupExit onClick={footerExitHandler}>
						<i className="fa fa-2x fa-times"></i>
					</StyledFloatingSignupExit>
					<EmailSignup />
				</StyledFloatingSignupContainer>
			)
		} else {
			return (
				<div></div>
			)
		}
	}

	const SocialIconComponent = () => {
		return (
			<StyledFooterSocialIconsContainer>
				<StyledIconContainer>
					<StyledFooterLinks>
						<i className="fa fa-instagram fa-2x fa-spin delayed-spinner"></i>
					</StyledFooterLinks>
				</StyledIconContainer>
				<StyledIconContainer>
					<StyledFooterLinks>
						<i className="fa fa-youtube-square fa-2x"></i>
					</StyledFooterLinks>
				</StyledIconContainer>
				<StyledIconContainer>
					<StyledFooterLinks>
						<i className="fa fa-facebook-square fa-2x"></i>
					</StyledFooterLinks>
				</StyledIconContainer>
				<StyledIconContainer>
					<StyledFooterLinks>
						<i className="fa fa-twitter-square fa-2x"></i>
					</StyledFooterLinks>
				</StyledIconContainer>
			</StyledFooterSocialIconsContainer>
		)
	}

	const CopyrightComponent = () => {
		return (
			<StyledFooterCopyrightContainer>
				© 2020 Alex, Inc. All Rights Reserved
			</StyledFooterCopyrightContainer>
		)
	}

	const LeftFooter = () => {
		return (
			<StyledLeftFooterContainer>
				<SocialIconComponent/>
				<StyledStaticEmailSignupContainer>
					<EmailSignup/>
				</StyledStaticEmailSignupContainer>
			</StyledLeftFooterContainer>
		)
	}

	const RightFooter = () => {
		return (
			<StyledRightFooterContainer>
				<StyledFooterNavigationContainer>
					<Link to="/store/">
						<StyledFooterLinks>
							Store
						</StyledFooterLinks>
					</Link>
					<Link to="/about/">
						<StyledFooterLinks>
							About Us
						</StyledFooterLinks>
					</Link>
					<Link to="/contact/">
						<StyledFooterLinks>
							Contact Us
						</StyledFooterLinks>
					</Link>
					<StyledFooterLinks>
						Brand1
					</StyledFooterLinks>
					<StyledFooterLinks>
						Brand2
					</StyledFooterLinks>
				</StyledFooterNavigationContainer>
			</StyledRightFooterContainer>
		)
	}

	return (
		<>
			<StyledMainFooterContainer>
				<LeftFooter />
				<RightFooter />
				<CopyrightComponent/>
			</StyledMainFooterContainer>
			<FloatingEmailSignup />
			
		</>
	)
}

export default Footer