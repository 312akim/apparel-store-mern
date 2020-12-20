import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//import axios from 'axios';
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
        products: PRODUCTS,
        loading: true
    }

    render () {
        const Home = () => {
            return ( 
                <HomePage products={this.state.products}/>
            )
        }

        const AdminPanelPage = () => {

            return (
                <AdminPanel products={this.state.products}/>
            )
        }

        const StorePage = () => {
            return (
                <Store products={this.state.products}/>
            )
        }

        const ItemPage = ({match}) => {
            const product = this.state.products.filter(
                (item) => item.name === match.params.item_name
            )[0]

            return (
                <ProductPage item={product}/>
            )
        }

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
    }

}

export default Main;