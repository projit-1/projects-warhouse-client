import React from 'react';
import { Button, Pagination } from 'react-bootstrap';
import useInventories from '../../Hooks/useInventories';
import Addinventories from '../AddInventories/Addinventories';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useInventories();
    return (
        <div>
            <div className='d-flex'>
                <div className="inventories">
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div className="manageinventories mx-auto ">
                    <h2>Manage Inventories</h2>
                    <Addinventories></Addinventories>
                </div>
            </div>
            <div className="pagination w-50 mx-auto my-5">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item active>{6}</Pagination.Item>
                    <Pagination.Item>{7}</Pagination.Item>
                    <Pagination.Item disabled>{8}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>

        </div >
    );
};

export default Inventories;