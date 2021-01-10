import React, { Component } from 'react';
import { ItemPageContainer, PreviewImg, PreviewContainerDiv, MainProductImg, ItemName, ItemPrice, LaptopContainer, LaptopPrice,
        OptionsContainer, SizeContainer, QuantityContainer, OptionsLabel, SelectSize, SelectQuantity } from './ProductPageStyles';
  
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

        const OptionPicker = () => {
            return (
                <OptionsContainer>
                    <SizeContainer>
                        <OptionsLabel for="size">Size:</OptionsLabel>
                        <SelectSize name="size" id="size">
                            <option value="xs">XS</option>
                            <option value="sm">SM</option>
                            <option value="med" selected>MED</option>
                            <option value="lg">LG</option>
                            <option value="xlg">X-LG</option>
                        </SelectSize>
                    </SizeContainer>
                    <QuantityContainer>
                        <OptionsLabel for="quantity">Quantity:</OptionsLabel>
                        <SelectQuantity name="size" id="size" selected="1">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </SelectQuantity>
                    </QuantityContainer>
                </OptionsContainer>
            )
        }

        const LargeScreenDisplay = () => {
            return (
                <LaptopContainer className="hideIfSmallDisplay">
                    <LaptopPrice>${this.props.item.price}</LaptopPrice>
                    <OptionPicker />
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
                    <OptionPicker />
                    <Cart />
                </div>

            </ItemPageContainer>
        )
    }
}

export default ProductPage;