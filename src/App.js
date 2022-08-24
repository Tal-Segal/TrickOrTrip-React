import React from 'react';
import './App.css';
import Navbar from './components/NavBar/index.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/index.js';
import About from './components/About/about.js';
import Contact from './components/Contact/contact.js';
import Gallery from './components/Gallery/gallery.js';
import Management from './components/Management/management.js';
import Orders from './components/Orders/orders.js';
import ChatEnv from './components/ChatEnv/env.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

class App extends React.Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({data: res.express}))
            .catch(err => console.log(err));
    }

    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (
            <>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/gallery" element={<Gallery/>}/>
                        <Route path="/management" element={<Management/>}/>
                        <Route path="/orders" element={<Orders/>}/>
                        <Route path="/chatenv" element={<ChatEnv socket = {socket}/>}/>
                    </Routes>
                </Router>

                <p className="App-intro">{this.state.data}</p>
            </>

        );
    }
}

export default App;