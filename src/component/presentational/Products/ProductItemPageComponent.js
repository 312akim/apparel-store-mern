import React, { Component } from 'react';
import { ItemPageContainer, PreviewImg, PreviewContainerDiv, MainProductImg, ItemName, ItemPrice, SizeContainer, LaptopContainer, LaptopPrice, SizeBox } from './ProductPageStyles';
  
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
                <PreviewImg onClick={event => this.displayChanger(image.src)} src={image.src}></PreviewImg>
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
                <SizeContainer>
                    <SizeBox>XS</SizeBox>
                    <SizeBox>SM</SizeBox>
                    <SizeBox>MED</SizeBox>
                    <SizeBox>LG</SizeBox>
                    <SizeBox>XL</SizeBox>
                </SizeContainer>
            )
        }

        const LargeScreenDisplay = () => {
            return (
                <LaptopContainer className="hideIfSmallDisplay">
                    <LaptopPrice>${this.props.item.price}</LaptopPrice>
                    <SizePicker />
                    <Cart />
                </LaptopContainer>
            )
        }
    
        return (
            <ItemPageContainer>
                <div>Breadcrumb path to page</div>
                <div>
                    <ItemName>{this.props.item.name}</ItemName>
                    <ItemPrice>${this.props.item.price}</ItemPrice>
                    <LargeScreenDisplay />
                    <MainProductImg src={this.state.displayedImage}></MainProductImg>
                </div>
                <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
                <div className="hideIfLargeDisplay">    
                    <SizePicker />
                    <Cart />
                </div>

            </ItemPageContainer>
        )
    }
}

export default ProductPage;