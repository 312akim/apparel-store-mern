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
import Footer from './presentational/Footer/FooterComponent'
import { PRODUCTS } from '../shared/products'

class Main extends Component {
    state = {
        // Products Array
        products: [],
        // Set to true on active site. False for testing.
        loading: true
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
        const { products, loading } = this.state;
        
        // This needs to be an array thats mappable
        console.log("products!!!!", products);

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

        if (!loading) {
            return (
                <>
                    <TopNav />
                        {/* <Cart /> */}
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            {/* Need to make Admin only accessible w/ login */}
                            <Route exact path="/admin" component={AdminPanelPage}/>
                            <Route exact path="/store" component={StorePage} />
                            <Route path="/store/:item_name" component={ItemPage}/>
                            <Route exact path="/about" component={AboutUs} />
                            <Route exact path="/contact" component={ContactUs} />
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
                    <h1>LOADING!</h1>
                </>
            )
        }
    }

}

export default Main;