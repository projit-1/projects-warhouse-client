
import React from 'react';
import { Carousel } from 'react-bootstrap';
import useInventories from '../../Hooks/useInventories';
import slide01 from "../../images/slide-image01.jpg"
import slide02 from "../../images/slide-image02.jpg"
import slide03 from "../../images/slide-image03.jpg"
import Faqs from '../FAQs/Faqs';
import Inventory from '../Inventory/Inventory';
import Management from '../Management/Management';
import './Home.css'

const Home = () => {
    const [inventories, setInventories] = useInventories();
    return (
        <div>
            <banner-section>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide01}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 >MacBook Pro</h2>
                            <h6 >The best MacBooks you can buy right now are all here — so you can figure out which is best for you...</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide02}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>HP Laptop</h2>
                            <h6>HP brand laptop has excellent performance, and a long battery life. HP is one of the oldest brand in the world.</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide03}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 className='text-black'>New iMac</h2>
                            <h6 className='text-black'>Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space.</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </banner-section>
            <div>
                <h2> Our Items</h2>
                <div className='inventory'>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div />
                <Faqs></Faqs>
                <Management></Management>
            </div >
        </div >
    );
};

export default Home;