import React from 'react'
import { MainFooterContainer, StaticEmailSignupContainer, FloatingSignupContainer, EmailSignupText, FloatingSignupExit, EmailSignupInput, EmailSignupButton, FooterSocialIconsContainer, FooterNavigationContainer, FooterLinks, FooterCopyrightContainer, IconContainer, LeftFooterContainer, RightFooterContainer } from './FooterComponentStyles';
import { Link } from 'react-router-dom';

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
					<i class="fa fa-paper-plane"></i>
				</EmailSignupButton>
			</>
		)
	}


	//Exiting float should set state to hidden 
	const FloatingEmailSignup = () => {
		if (showEmailSignup) {
			return (
				<FloatingSignupContainer className="fixed-bottom">
					<FloatingSignupExit onClick={footerExitHandler}>
						<i class="fa fa-2x fa-times"></i>
					</FloatingSignupExit>
					<EmailSignup />
				</FloatingSignupContainer>
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
					<FooterLinks>
						<i class="fa fa-instagram fa-2x fa-spin delayed-spinner"></i>
					</FooterLinks>
				</IconContainer>
				<IconContainer>
					<FooterLinks>
						<i class="fa fa-youtube-square fa-2x"></i>
					</FooterLinks>
				</IconContainer>
				<IconContainer>
					<FooterLinks>
						<i class="fa fa-facebook-square fa-2x"></i>
					</FooterLinks>
				</IconContainer>
				<IconContainer>
					<FooterLinks>
						<i class="fa fa-twitter-square fa-2x"></i>
					</FooterLinks>
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

	const LeftFooter = () => {
		return (
			<LeftFooterContainer>
				<SocialIconComponent/>
				<StaticEmailSignupContainer>
					<EmailSignup/>
				</StaticEmailSignupContainer>
			</LeftFooterContainer>
		)
	}

	const RightFooter = () => {
		return (
			<RightFooterContainer>
				<FooterNavigationContainer>
					<Link to="/store/">
						<FooterLinks>
							Store
						</FooterLinks>
					</Link>
					<Link to="/about/">
						<FooterLinks>
							About Us
						</FooterLinks>
					</Link>
					<Link to="/contact/">
						<FooterLinks>
							Contact Us
						</FooterLinks>
					</Link>
					<FooterLinks>
						Brand1
					</FooterLinks>
					<FooterLinks>
						Brand2
					</FooterLinks>
				</FooterNavigationContainer>
			</RightFooterContainer>
		)
	}

	return (
		<>
			<MainFooterContainer>
				<LeftFooter />
				<RightFooter />
				<CopyrightComponent/>
			</MainFooterContainer>
			<FloatingEmailSignup />
			
		</>
	)
}

export default Footer