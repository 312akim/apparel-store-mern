import React, { Component } from 'react';
import { StyledPreviewImg, PreviewContainerDiv, MainProductImg, StyledItemName, StyledItemPrice, StyledSizeContainer, StyledLaptopContainer, StyledLaptopPrice, StyledLaptopSize } from './ProductPageStyles';
  
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

        const SizePicker = (props) => {
            return (
                <StyledSizeContainer>
                    <div>XS SM MED LG XL</div>
                </StyledSizeContainer>
            )
        }

        const LargeScreenDisplay = () => {
            return (
                <StyledLaptopContainer className="hideIfSmallDisplay">
                    <StyledLaptopPrice>${this.props.item.price}</StyledLaptopPrice>
                    <SizePicker />
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
                    <Cart />
                </div>
                <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
                <div className="hideIfLargeDisplay">    
                    <SizePicker />
                </div>

            </div>
        )
    }
}

export default ProductPage;