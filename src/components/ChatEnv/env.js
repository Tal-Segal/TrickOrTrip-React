import React from "react";
import {useState} from "react";
import PropTypes from 'prop-types';
import Chat from "./Chat.js";
import banner_image_1 from "../../images/banner-image-1.jpg";
import banner_image_2 from "../../images/banner-image-2.jpg";
import banner_image_3 from "../../images/banner-image-3.jpg";
import banner_image_4 from "../../images/banner-image-4.jpg";

function ChatEnv( {socket}) {

    ChatEnv.propTypes = {
        socket: PropTypes.node.isRequired
    };

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    return (
        <>
        <div className="ChatEnv">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    <input
                        type="text"
                        placeholder="John..."
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value);
                        }}
                    />
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Chat socket={socket} username={username} room={room} />
            )}
        </div>

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
    );
}

export default ChatEnv;