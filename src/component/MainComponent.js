import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TopNav from './container/Navigation/TopNavigationComponent'
import HomePage from './presentational/Home/HomeComponent'
import AdminPanel from './Admin/AdminPanel'
import MainStore from './presentational/Store/MainStoreComponent'
import ProductPage from './presentational/Products/ProductItemPageComponent'
import AboutUs from './presentational/About/AboutComponent'
import ContactUs from './container/Contact/ContactComponent'
import Footer from './presentational/Footer/FooterComponent'
import { PRODUCTS } from '../shared/products'

class Main extends Component {
    state = {
        products: PRODUCTS
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

        const MainStorePage = () => {
            return (
                <MainStore products={this.state.products}/>
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
                        <Route exact path="/store" component={MainStorePage} />
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