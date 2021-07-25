import React, { Component } from 'react';
import { StyledItemPageContainer, StyledPreviewImg, StyledPreviewContainerDiv, StyledMainProductImg, StyledItemName, StyledItemPrice, StyledLaptopContainer, StyledLaptopPrice,
        StyledOptionsContainer, StyledSizeContainer, StyledQuantityContainer, StyledOptionsLabel, StyledSelectOptions, StyledCartContainer, StyledPreviewImgCropper } from './ProductItemPageStyles';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'; 
import { StyledButton } from '../../../shared/themes';

class ProductPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			displayedImage: props.item.images[0].src,
            productQuantity: 1,
            productSize: 'X-Small',
            product: [],
		};
    }

    displayChanger = (image) => {
        this.setState({
            displayedImage: image
        })
    }

    quantityChangeHandler = (e) => {
        this.setState({
            productQuantity: e.target.value
        });
    }

    sizeChangeHandler = (e) => {
        this.setState({
            productSize: e.target.value
        });
    }

    render() {
        // Api request tests
        console.log(this.state.product);

        // Image Previews
        let count = 0; // Unique key for each child
        const imageMap = this.props.item.images.map((image) => {
            return (
                <StyledPreviewImgCropper>
                    <StyledPreviewImg key={count++} onClick={() => this.displayChanger(image.src)} src={image.src}/>
                </StyledPreviewImgCropper>
            )
        })

        return (
            <StyledItemPageContainer>
                <BreadcrumbComponent itemName={this.props.item.name}/>
                <div>
                    <StyledItemName>{this.props.item.name}</StyledItemName>
                    <StyledItemPrice>${this.props.item.price}</StyledItemPrice>
                    <LargeScreenDisplay props={this.props} itemPrice={this.props.item.price} productSize={this.state.productSize} productQuantity={this.state.productQuantity} sizeChangeHandler={this.sizeChangeHandler} quantityChangeHandler={this.quantityChangeHandler}/>
                    <StyledMainProductImg src={this.state.displayedImage}></StyledMainProductImg>
                    <StyledPreviewContainerDiv>{imageMap}</StyledPreviewContainerDiv>
                </div>
                <div className="hideIfLargeDisplay">    
                    <OptionPicker productSize={this.state.productSize} productQuantity={this.state.productQuantity} sizeChangeHandler={this.sizeChangeHandler} quantityChangeHandler={this.quantityChangeHandler}/>
                    <Cart props={this.props} productQuantity={this.state.productQuantity} productSize={this.state.productSize}/>
                </div>
            </StyledItemPageContainer>
        )
    }
}

const LargeScreenDisplay = ({props, itemPrice, productSize, productQuantity, sizeChangeHandler, quantityChangeHandler}) => {
    return (
        <StyledLaptopContainer className="hideIfSmallDisplay">
            <StyledLaptopPrice>${itemPrice}</StyledLaptopPrice>
            <OptionPicker productSize={productSize} productQuantity={productQuantity} sizeChangeHandler={sizeChangeHandler} quantityChangeHandler={quantityChangeHandler}/>
            <Cart props={props} productQuantity={productQuantity} productSize={productSize}/>
        </StyledLaptopContainer>
    )
}

const Cart = ({props, productSize, productQuantity}) => {

    // Have snipchart check here for product data verification + :id
    const snipcartUrl="https://frozen-garden-94356.herokuapp.com/api/snipcart/";
    
    return (
        <StyledCartContainer>
            <StyledButton largeWidth='70%' className="snipcart-add-item"
                data-item-id={`${props.item._id}`}
                data-item-price={`${props.item.price}`}
                data-item-url={snipcartUrl + props.item._id}
                data-item-description={props.item.description}
                data-item-image={props.item.images[0].src}
                data-item-name={props.item.name}
                data-item-custom1-name="Size"
                data-item-custom1-options={productSize}
                data-item-quantity={productQuantity}
            >
                Add to Cart
            </StyledButton>
        </StyledCartContainer>
    )
}

// Change quantity picker to +- buttons instead of 1-10
const OptionPicker = ({productSize, productQuantity, sizeChangeHandler, quantityChangeHandler}) => {
    
    const onSizeChange = (e) => {
        sizeChangeHandler(e);
    }

    const onQuantityChange = (e) => {
        quantityChangeHandler(e);
    }

    return (
        <StyledOptionsContainer>
            <StyledSizeContainer>
                <StyledOptionsLabel htmlFor="size">Size:</StyledOptionsLabel>
                <StyledSelectOptions name="size" id="size" value={productSize} onChange={(e) => onSizeChange(e)}>
                    <option value="choose" disabled>Choose Size</option>
                    <option value="X-Small">X-Small</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </StyledSelectOptions>
            </StyledSizeContainer>
            <StyledQuantityContainer>
                <StyledOptionsLabel htmlFor="quantity">Quantity:</StyledOptionsLabel>
                <StyledSelectOptions name="quantity" id="quantity" value={productQuantity} onChange={(e) => onQuantityChange(e)}>
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
                </StyledSelectOptions>
            </StyledQuantityContainer>
        </StyledOptionsContainer>
    )
}

const BreadcrumbComponent = ({itemName}) => {
    return (
            <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="/store">Store</a></BreadcrumbItem>
                <BreadcrumbItem active>{itemName}</BreadcrumbItem>
            </Breadcrumb>
    )
}

export default ProductPage;