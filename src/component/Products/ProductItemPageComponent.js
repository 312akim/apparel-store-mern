import React, { Component } from 'react';
import { StyledPreviewImg, PreviewContainerDiv, MainProductImg } from './ProductPageStyles';
  
class ProductPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displayedImage: props.item.images[0].src
		}
    }

    displayChanger = (image) => {
        console.log("displayChanger working")
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
                    <p>Price Here</p>
                    <div>Add to cart button here</div>
                </div>
            )
        }
    
        return (
            <div>
                <div>
                    <h2>{this.props.item.name}</h2>
                    <MainProductImg src={this.state.displayedImage}></MainProductImg>
                    <Cart />
                </div>
                <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
            </div>
        )
    }
}

// const ProductPage = ({item}) => {

//     //Needs to update displayed image on preview image click
//     let displayedImage = item.images[0].src;
    
//     const displayChanger = (image) => {
//         console.log(image);
//         console.log("hi")
//         displayedImage = image;
//         console.log(displayedImage);
//     }
    

//     const imageMap = item.images.map((image) => {
//         return (
//             <StyledPreviewImg onClick={event => displayChanger(image.src)} src={image.src}></StyledPreviewImg>
//         )
//     })

//     const Cart = () => {
//         return (
//             <div>
//                 <p>Price Here</p>
//                 <div>Add to cart button here</div>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <div>
//                 <h2>{item.name}</h2>
//                 <MainProductImg src={displayedImage}></MainProductImg>
//                 <Cart />
//             </div>
//             <PreviewContainerDiv>{imageMap}</PreviewContainerDiv>
//         </div>
//     )
// }

export default ProductPage;