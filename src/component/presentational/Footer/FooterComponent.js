import React from 'react'
import { MainFooterContainer, StaticEmailSignupContainer, FooterEmailSignupContainer, EmailSignupText, EmailSignupExit, EmailSignupInput, EmailSignupButton, FooterSocialIconsContainer, FooterNavigationContainer, FooterCopyrightContainer, IconContainer, LeftFooterContainer, RightFooterContainer } from './FooterComponentStyles';


//Sticky footer? Email subscribe should always be visible...
const Footer = ({showEmailSignup, footerExitHandler}) => {
	
	const EmailSignup = () => {
		return (
			<>
				<EmailSignupText>
					Stay up to date!
				</EmailSignupText>
				<EmailSignupInput placeholder="Email Address">
				</EmailSignupInput>
				<EmailSignupButton type="submit">
					Submit
				</EmailSignupButton>
			</>
		)
	}
	// Needs to be resized & centered due to exit button
	const FloatingEmailSignup = () => {
		if (showEmailSignup) {
			return (
				<FooterEmailSignupContainer className="fixed-bottom">
					<EmailSignupExit onClick={footerExitHandler}>X</EmailSignupExit>
					<EmailSignup />
				</FooterEmailSignupContainer>
			)
		} else {
			return (
				<div></div>
			)
		}
	}

	const SocialIconComponent = () => {
		return (
			<FooterSocialIconsContainer>
				<IconContainer>
					<i class="fa fa-instagram fa-2x"></i>
				</IconContainer>
				<IconContainer>
					<i class="fa fa-youtube-square fa-2x"></i>
				</IconContainer>
				<IconContainer>
					<i class="fa fa-facebook-square fa-2x"></i>
				</IconContainer>
				<IconContainer>
					<i class="fa fa-twitter-square fa-2x"></i>
				</IconContainer>
			</FooterSocialIconsContainer>
		)
	}

	const CopyrightComponent = () => {
		return (
			<FooterCopyrightContainer>
				© 2020 Alex, Inc. All Rights Reserved
			</FooterCopyrightContainer>
		)
	}

	return (
		<>
			<MainFooterContainer>
				<LeftFooterContainer>
					<SocialIconComponent/>
					<StaticEmailSignupContainer>
						<EmailSignup/>
					</StaticEmailSignupContainer>
				</LeftFooterContainer>
				<RightFooterContainer>
					<FooterNavigationContainer>
						<div>Navigation</div>
						<div>Store</div>
						<div>About Us</div>
						<div>Contact Us</div>
						<div>Brand 1</div>
						<div>Brand 2</div>
					</FooterNavigationContainer>
				</RightFooterContainer>
				<CopyrightComponent/>
			</MainFooterContainer>
			<FloatingEmailSignup />
			
		</>
	)
}

export default Footer