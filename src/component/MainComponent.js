import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios';
import TopNav from './container/Navigation/TopNavigationComponent'
import HomePage from './presentational/Home/HomeComponent'
import AdminPanel from './Admin/AdminPanel'
import Store from './presentational/Store/StoreComponent'
import ProductPage from './presentational/Products/ProductItemPageComponent'
import AboutUs from './presentational/About/AboutComponent'
import ContactUs from './container/Contact/ContactComponent'
import FooterComponent from './presentational/Footer/FooterComponent'
import Cart from './container/Cart/CartPageComponent';
import { LoadingContainer } from '../shared/themes';

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

        const AdminPanelPage = () => {

            return (
                <AdminPanel products={products}/>
            )
        }

        const StorePage = () => {
            return (
                <Store products={products}/>
            )
        }

        const ItemPage = ({match}) => {
            const product = products.products.filter(
                (item) => item.name === match.params.item_name
            )[0]

            return (
                <ProductPage item={product}/>
            )
        }

        const CartPage = () => {
            return (
                <Cart />
            )
        }

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
                <>
                    <TopNav />
                    {/* <Cart /> */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        {/* Need to make Admin only accessible w/ login */}
                        <Route path="/admin" component={AdminPanelPage}/>
                        <Route exact path="/store" component={StorePage} />
                        <Route path="/store/:item_name" component={ItemPage}/>
                        <Route path="/cart" component={CartPage} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/contact" component={ContactUs} />
                        <Redirect to="/home"/>
                        <div className="MainPage">This is the main page</div>
                    </Switch>
                    <Footer />
                </>
            )
        } else {
            // <Loader />
            return (
                <>
                    <LoadingContainer>
                        <i class="fa fa-spinner fa-pulse fa-4x"></i>
                        <h1>
                            Loading
                        </h1>
                    </LoadingContainer>
                </>
            )
        }
    }

}

export default Main;