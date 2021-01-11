import React from 'react'
import { FooterContainer, FooterEmailSignupContainer, EmailSignupText, EmailSignupExit, EmailSignupInput, FooterSocialIconsContainer, FooterNavigationContainer, FooterCopyrightContainer } from './FooterComponentStyles';


//Sticky footer? Email subscribe should always be visible...
const Footer = ({showEmailSignup, footerExitHandler}) => {
	
	const EmailSignup = () => {
		if (showEmailSignup) {
			return (
				<FooterEmailSignupContainer className="fixed-bottom">
					<EmailSignupExit onClick={footerExitHandler}>X</EmailSignupExit>
					<EmailSignupText>
						Stay up to date!
					</EmailSignupText>
					<EmailSignupInput>
					</EmailSignupInput>
					<button type="submit">
						Submit
					</button>
				</FooterEmailSignupContainer>
			)
		} else {
			return (
				<div></div>
			)
		}
	}

	return (
		<>
			<FooterContainer>
				<FooterSocialIconsContainer>
					Social Icons
				</FooterSocialIconsContainer>
				<FooterNavigationContainer>
					<div>Navigation</div>
				</FooterNavigationContainer>

				<FooterCopyrightContainer>
					Copyright
				</FooterCopyrightContainer>
			</FooterContainer>
			<EmailSignup />
		</>
	)
}

export default Footer