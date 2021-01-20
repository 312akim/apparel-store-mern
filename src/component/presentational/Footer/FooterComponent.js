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
					Submit
				</EmailSignupButton>
			</>
		)
	}

	const FloatingEmailSignup = () => {
		if (showEmailSignup) {
			return (
				<FloatingSignupContainer className="fixed-bottom">
					<FloatingSignupExit onClick={footerExitHandler}>X</FloatingSignupExit>
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
						<i class="fa fa-instagram fa-2x"></i>
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
				<CopyrightComponent/>
			</MainFooterContainer>
			<FloatingEmailSignup />
			
		</>
	)
}

export default Footer