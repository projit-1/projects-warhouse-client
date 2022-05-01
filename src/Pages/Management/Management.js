import React from 'react';
import automation from '../../images/automation.jpg'
import connectivity from '../../images/connectivity.jpg'
import packaging from '../../images/packaging.jpg'
import shipment from '../../images/shipment.jpg'
import './Management.css'

const Management = () => {
    return (
        <div>
            <h2>Our Management System</h2>
            <div className="management container">
                <div className=' management-text d-flex py-2'>
                    <img src={automation} alt="" />
                    <p> <h4>Automation</h4> Through inventory automation is defined as utilizing certain software or technology to manage warehouse stock in real-time with minimum effort and errors. This sophisticated method grants new era. Inventory automation includes many options. Among the most widespread ones used by the retailers is automated reordering; keeping accurate track records of stock transferring; uniting multiple locations reporting in your chain; processing store orders; notifying about the goods dispatch. Includings many other things, one is barcode reading. Barcode is a visually represented picture available to be read by special scanners and giving the possibility to process inventory data quickly with no burden of the documents and manual counting. This way of warehouse automation minimizes human errors and simplifies the stock records process.
                        <hr />
                    </p>

                </div>

                <div className=' management-text d-flex py-2'>
                    <img src={connectivity} alt="" />
                    <p> <h4>Networking</h4> Connectivity or Network inventory management is the process of keeping records of all the IT or network assets that make up the network.

                        It enables network administrators/businesses to have a physical record of all IT and network equipment within the organization. .Network inventory management is generally performed to through IT asset tracking software that scans, compiles and records data about each device/node over a network.
                        <hr />
                    </p>
                </div>
                <div className=' management-text d-flex py-2'>
                    <img src={packaging} alt="" />
                    <p>  <h4>Packaging</h4>Managing any inventory of products is hard work. This is particularly true of your packaging inventory management.

                        Having too much stock ties up working capital and creates the additional (often significant) cost of safely storing your packaging. Too little stock can lead to frequent outages. This in turn can stop production lines (at huge expense) and cause delays in fulfilling orders. It can also lead to the need to place frequent orders, increasing time spent on administration. The packaging inventory management service was originally created due to an ever increasing number of companies like yours feeling the cost pressures of maintaining large warehouses, struggling to cope with fluctuations in demand, not having enough storage space for packaging, or just facing the difficulties inherent with the management of large inventories of
                        varying packaging items.
                        <hr />
                    </p>
                </div>
                <div className=' management-text d-flex py-2'>
                    <img src={shipment} alt="" />
                    <p> <h4> Shipment</h4>   Shipping and inventory in particular. 2018 has been witnessing some major trends in inventory management and shipping so far. People are confidently investing in these tools because they figure that it is an important area for optimization and enhanced customer experience. That’s not exactly surprising considering global retail E-commerce is estimated to hit $1800 billion this year. We’ve put together some of the tools that rule the roost with their multiple inventory management and fast shipping methods. With newer tools, retailers find that they can see use one platform/ tool to access all details on order fulfilment, barcode inventory and purchase management.
                        <hr />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Management;