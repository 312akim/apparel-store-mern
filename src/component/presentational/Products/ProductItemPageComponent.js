import React, { Component } from 'react';
import { StyledPreviewImg, PreviewContainerDiv, MainProductImg, StyledItemName, StyledItemPrice } from './ProductPageStyles';
  
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
    
        return (
            <div>
                <div>
                    <div>Breadcrumb path to page</div>
                    <StyledItemName>{this.props.item.name}</StyledItemName>
                    <StyledItemPrice>${this.props.item.price}</StyledItemPrice>
                    <MainProductImg src={this.state.displayedImage}></MainProductImg>
                    <Cart />
                </div>
                <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
                <div> XS    SM    MED    LG    XL</div>
            </div>
        )
    }
}

export default ProductPage;