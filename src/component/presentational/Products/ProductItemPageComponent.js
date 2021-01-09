import React, { Component } from 'react';
import { StyledPreviewImg, PreviewContainerDiv, MainProductImg, StyledItemName, StyledItemPrice, StyledSizeContainer, StyledLaptopContainer, StyledLaptopPrice, StyledLaptopSize, SizeBox } from './ProductPageStyles';
  
class ProductPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displayedImage: props.item.images[0].src
		}
    }

    displayChanger = (image) => {
        this.setState({
            displayedImage: image
        })
    }

    render() {
        const imageMap = this.props.item.images.map((image) => {
            return (
                <StyledPreviewImg onClick={event => this.displayChanger(image.src)} src={image.src}></StyledPreviewImg>
            )
        })
    
        const Cart = () => {
            return (
                <div>
                    <i className="fa fa-cart-plus fa-3x" onClick={event => console.log("add to cart")}></i>
                </div>
            )
        }

        const SizePicker = () => {
            return (
                <StyledSizeContainer>
                    <SizeBox>XS</SizeBox>
                    <SizeBox>SM</SizeBox>
                    <SizeBox>MED</SizeBox>
                    <SizeBox>LG</SizeBox>
                    <SizeBox>XL</SizeBox>
                </StyledSizeContainer>
            )
        }

        const LargeScreenDisplay = () => {
            return (
                <StyledLaptopContainer className="hideIfSmallDisplay">
                    <StyledLaptopPrice>${this.props.item.price}</StyledLaptopPrice>
                    <SizePicker />
                    <Cart />
                </StyledLaptopContainer>
            )
        }
    
        return (
            <div>
                <div>
                    <div>Breadcrumb path to page</div>
                    <StyledItemName>{this.props.item.name}</StyledItemName>
                    <StyledItemPrice>${this.props.item.price}</StyledItemPrice>
                    <LargeScreenDisplay />
                    <MainProductImg src={this.state.displayedImage}></MainProductImg>
                </div>
                <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
                <div className="hideIfLargeDisplay">    
                    <SizePicker />
                    <Cart />
                </div>

            </div>
        )
    }
}

export default ProductPage;