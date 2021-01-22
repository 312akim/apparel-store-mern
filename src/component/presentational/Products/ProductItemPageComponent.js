import React, { Component } from 'react';
import { ItemPageContainer, PreviewImg, PreviewContainerDiv, MainProductImg, ItemName, ItemPrice, LaptopContainer, LaptopPrice,
        OptionsContainer, SizeContainer, QuantityContainer, OptionsLabel, SelectOptions, CartContainer } from './ProductPageStyles';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'; 
import { StyledButton } from '../../../shared/themes';

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
                <CartContainer>
                    <StyledButton largeWidth='70%'>
                        Add to Cart
                    </StyledButton>
                </CartContainer>
            )
        }

        const OptionPicker = () => {
            return (
                <OptionsContainer>
                    <SizeContainer>
                        <OptionsLabel for="size">Size:</OptionsLabel>
                        <SelectOptions name="size" id="size">
                            <option value="choose" disabled selected>Choose Size</option>
                            <option value="xs">X-Small</option>
                            <option value="sm">Small</option>
                            <option value="med">Medium</option>
                            <option value="lg">Large</option>
                            <option value="xlg">X-Large</option>
                        </SelectOptions>
                    </SizeContainer>
                    <QuantityContainer>
                        <OptionsLabel for="quantity">Quantity:</OptionsLabel>
                        <SelectOptions name="quantity" id="quantity">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </SelectOptions>
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

        const BreadcrumbComponent = () => {
            return (
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="/store">Store</a></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.item.name}</BreadcrumbItem>
                    </Breadcrumb>
            )
        }
    
        return (
            <ItemPageContainer>
                <BreadcrumbComponent />
                <div>
                    <ItemName>{this.props.item.name}</ItemName>
                    <ItemPrice>${this.props.item.price}</ItemPrice>
                    <LargeScreenDisplay />
                    <MainProductImg src={this.state.displayedImage}></MainProductImg>
                    <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
                </div>
                <div className="hideIfLargeDisplay">    
                    <OptionPicker />
                    <Cart />
                </div>
            </ItemPageContainer>
        )
    }
}

export default ProductPage;