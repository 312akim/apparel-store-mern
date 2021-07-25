import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios';
import TopNav from './container/Navigation/TopNavigationComponent'
import HomePage from './presentational/Home/HomeComponent'
// import AdminPanel from './Admin/AdminPanel'
// import Cart from './container/Cart/CartPageComponent';
import Store from './presentational/Store/StoreComponent'
import ProductPage from './presentational/Products/ProductItemPageComponent'
import AboutUs from './presentational/About/AboutComponent'
import ContactUs from './container/Contact/ContactComponent'
import FooterComponent from './presentational/Footer/FooterComponent'
import { StyledLoadingContainer } from '../shared/themes';
import { spacesToHashDelimiter } from '../shared/stringSpaceToHash';

class Main extends Component {
    state = {
        products: [],
        loading: true,
        
        // If true, show email sign-up, on close, set to false.
        showEmailSignup: true
    }

    
    componentDidMount() {
        axios.get('/api/products').then(
            res => {
            console.log('res.data products-----------', res.data);
            this.setState({
                products: res.data, loading: false
            });
        }).catch(err => console.log('Read all products Error-------', err));
        
        console.log("Component Mounted!")
    }
    

    render () {
        const { products, loading, showEmailSignup } = this.state;

        const Home = () => {
            return ( 
                <HomePage products={products}/>
            )
        }

        // Currently no Admin Panel Page
        // const AdminPanelPage = () => {
        //     return (
        //         <AdminPanel products={products}/>
        //     )
        // }

        const StorePage = () => {
            return (
                <Store products={products}/>
            )
        }

        const ItemPage = ({match}) => {
            const product = products.products.filter(
                (item) => spacesToHashDelimiter(item.name) === match.params.item_url
            )[0]
            
            return (
                <ProductPage item={product} url={spacesToHashDelimiter(product.name)}/>
            )
        }

        // Cart provided by SnipCart
        // const CartPage = () => {
        //     return (
        //         <Cart />
        //     )
        // }

        const footerExitHandler = () => {
            this.setState({showEmailSignup: false});
        }

        const Footer = () => {
            return (
                <FooterComponent showEmailSignup={showEmailSignup} footerExitHandler={footerExitHandler}/>
            )
        }

        if (!loading) {
            return (
                <div className='hideOverflowY'>
                    <TopNav />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {/* Need to make Admin only accessible w/ login */}
                        {/* <Route path="/admin" component={AdminPanelPage}/> */}
                        <Route exact path="/store" component={StorePage} />
                        <Route path="/store/:item_url" component={ItemPage}/>
                        {/* <Route path="/cart" component={CartPage} /> */}
                        <Route path="/about" component={AboutUs} />
                        <Route path="/contact" component={ContactUs} />
                        <Redirect to="/"/>
                        <div className="MainPage">This is the main page</div>
                    </Switch>
                    <Footer />
                </div>
            )
        } else {
            // <Loader />
            return (
                <>
                    <StyledLoadingContainer>
                        <i className="fa fa-spinner fa-pulse fa-4x"></i>
                        <h1>
                            Loading
                        </h1>
                    </StyledLoadingContainer>
                </>
            )
        }
    }

}

export default Main;