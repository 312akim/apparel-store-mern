import React from 'react'
import InputGroupText from 'reactstrap/lib/InputGroupText';
import { FooterContainer } from './FooterComponentStyles';


const Footer = () => {
	return (
		<>
			<FooterContainer>
				<div>
					Type in Email to Subscribe to new releases and more!
				</div>
				<input>
				</input>
				<button type="submit">
					Submit
				</button>
			</FooterContainer>
		</>
	)
}

export default Footer