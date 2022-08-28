import React from 'react';
import banner_image_1 from "../../images/banner-image-1.jpg";
import banner_image_2 from "../../images/banner-image-2.jpg";
import banner_image_3 from "../../images/banner-image-3.jpg";
import banner_image_4 from "../../images/banner-image-4.jpg";


class Orders extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        dates: [],
        prices: [],
        cards: []
    };

    componentDidMount() {
        this.fetchOrders();
    }

    fetchOrders = async () => {
        try {
            let response = await fetch("/orders/data/" + localStorage.getItem('username'));
            let orders = await response.json();

            let dates = [];
            let prices = [];
            let cards = [];
            for (let item of orders) {
                dates.push(item.date);
                prices.push(item.price);
                cards.push(item.credit_card);
            }

            this.setState({dates: dates, prices: prices, cards: cards});
        } catch {
            alert("error");
        }
    };

    displayOrders = (dates, prices, cards) => {
        if (!dates.length) return null;

        return (
            <>
                    <div className="col-2"></div>
            <div className="orders col" key={dates._id}>
                <br/>
                <br/>
                <h2>Orders</h2>
                <br/>
                <table className="table table-striped table-light table-bordered table-hover" width="auto">
                    <thead className="thead-light">
                    <tr>
                        <th width="30%">DATE</th>
                        <th width="30%">PRICE</th>
                        <th width="30%">CREDIT CARD NUMBER</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dates.map((date, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <td>{date}</td>
                            <td>{prices.at(index)}</td>
                            <td>{cards.at(index)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
                <div className="col-2"></div>


                {/*<!-- Footer -->*/}
                <footer>
                    <section className="footer-top">
                        {/*<!--Container-->*/}
                        <div className="container">
                            <h2>Recent Trips</h2>
                            <div className="row text-center text-lg-left">
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_1} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_3} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_4} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_2} alt=""/></a>
                                </div>
                                <div className="col-lg-2 col-md-4 col-xs-6">
                                    <a href="src/components/Home/index#env.js" className="d-block h-100"><img className="img-fluid img-thumbnail"
                                                                                                                src={banner_image_1} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        {/*<!-- /.container -->*/}
                    </section>
                    <section className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ul>
                                        <li><a href="views/index.html">Home</a></li>
                                        <li className="hidden">/</li>
                                        <li><a href="about_us.html">About Us</a></li>
                                        <li className="hidden">/</li>
                                        <li><a onClick="$('#nav_bar').load('/navigation')">Gallery</a></li>
                                        <li className="hidden">/</li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!-- /.container -->*/}
                    </section>
                </footer>
            </>
        )
    }

    render() {
        return (
            <div className="row" align="center">
                {this.displayOrders(this.state.dates, this.state.prices, this.state.cards)}
            </div>
        )
    }
}

export default Orders;
