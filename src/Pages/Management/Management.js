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
                <div className='d-flex py-2'>
                    <img src={automation} alt="" />
                    <p>Automation Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error labore doloribus consequuntur repellendus quibusdam provident doloremque veritatis eius alias quo odio eos exercitationem voluptatibus, necessitatibus obcaecati veniam nulla ab?</p>
                </div>
                <div className='d-flex py-2'>
                    <img src={connectivity} alt="" />
                    <p>Connectivity Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, atque? Fuga animi aperiam illo nisi ad laborum nemo delectus! Et rerum beatae molestiae reprehenderit quis corporis consequuntur ut consectetur minima.</p>
                </div>
                <div className='d-flex py-2'>
                    <img src={packaging} alt="" />
                    <p>packaging Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, saepe reprehenderit fugiat doloribus iusto explicabo incidunt quae exercitationem, labore ea adipisci error, quam consequatur? Consequuntur quae sint culpa facere perspiciatis?</p>
                </div>
                <div className='d-flex py-2'>
                    <img src={shipment} alt="" />
                    <p>Finally shipment Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus iste magni iure repellat! Ad pariatur quam iusto corrupti autem. Est, adipisci in! Soluta assumenda praesentium tempora cum molestiae modi veritatis.</p>
                </div>
            </div>
        </div>
    );
};

export default Management;