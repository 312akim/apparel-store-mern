import React, { Component } from 'react';
import { ItemPageContainer, PreviewImg, PreviewContainerDiv, MainProductImg, ItemName, ItemPrice, LaptopContainer, LaptopPrice,
        OptionsContainer, SizeContainer, QuantityContainer, OptionsLabel, SelectOptions, CartContainer } from './ProductPageStyles';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'; 
import { StyledButton } from '../../../shared/themes';

class ProductPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			displayedImage: props.item.images[0].src,
            productQuantity: 1,
            productSize: 'X-Small'
		}
    }

    displayChanger = (image) => {
        this.setState({
            displayedImage: image
        })
    }

    quantityChangeHandler = (event) => {
        this.setState({
            productQuantity: event.target.value
        });
    }

    sizeChangeHandler = (event) => {
        this.setState({
            productSize: event.target.value
        });
    }

    render() {
        console.log("price: "+this.props.item.price);

        // Image Previews
        const imageMap = this.props.item.images.map((image) => {
            return (
                <PreviewImg onClick={event => this.displayChanger(image.src)} src={image.src}></PreviewImg>
            )
        })
    
        const Cart = () => {
            return (
                <CartContainer>
                    <StyledButton largeWidth='70%' className="snipcart-add-item"
                      data-item-id={this.props.item._id}
                      data-item-price={this.props.item.price}
                      data-item-url={"/store/" + this.props.url}
                      data-item-description={this.props.item.description}
                      data-item-image={this.props.item.images[0].src}
                      data-item-name={this.props.item.name}
                      data-item-custom1-name="Size"
                      data-item-custom1-options={this.state.productSize}
                      data-item-quantity={this.state.productQuantity}
                    >
                        Add to Cart
                    </StyledButton>
                </CartContainer>
            )
        }

        const OptionPicker = () => {
            return (
                <OptionsContainer>
                    <SizeContainer>
                        <OptionsLabel htmlFor="size">Size:</OptionsLabel>
                        <SelectOptions name="size" id="size" value={this.state.productSize} onChange={this.sizeChangeHandler.bind(this)}>
                            <option value="choose" disabled>Choose Size</option>
                            <option value="X-Small">X-Small</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="X-Large">X-Large</option>
                        </SelectOptions>
                    </SizeContainer>
                    <QuantityContainer>
                        <OptionsLabel htmlFor="quantity">Quantity:</OptionsLabel>
                        <SelectOptions name="quantity" id="quantity" value={this.state.productQuantity} onChange={this.quantityChangeHandler.bind(this)}>
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