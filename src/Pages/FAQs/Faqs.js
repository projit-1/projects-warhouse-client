import React from 'react';
import { Accordion } from 'react-bootstrap';
import storage from '../../images/storage.jpg'
import location from '../../images/location.jpg'
import remove from '../../images/remove.jpg'
import multiple from '../../images/multiple.jpg'

const Faqs = () => {
    return (
        <div className='container'>
            <h3>People Always Ask </h3>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How can I create a storage location?</Accordion.Header>
                    <Accordion.Body className='faqs-p d-flex'>
                        <img src={storage} alt="" />
                        <p>You can configure storage location by using one of the following navigation method. Menu path: – SPRO - IMG  Enterprise Structure -  Definition - Material management - Maintain Storage Location.</p>
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can I add an item to a storage location?</Accordion.Header>

                    <Accordion.Body className='faqs-p d-flex'>
                        <img src={location} alt="" />
                        <p> SAP transaction MMSC_MASS is a good tool for Mass Extending multiple storage location for multiple material masters. This transaction is especially useful in systems that do not allow the auto creation of the storage location view of material master when a material is first moved to a new storage location.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How can I remove a product from a storage location?</Accordion.Header>

                    <Accordion.Body className='faqs-p d-flex'>
                        <img src={remove} alt="" />
                        <p> First, See that all stocks in this storloc are moved to some other storloc.
                            Then, You may also want to delete material masters - storage loctaion view
                            Next, You may also want to change all the PR/POs where storage location is mentioned.
                            Finally, Check material masters where you might have given this as issue storage location.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How can I add multiple devices to a company?</Accordion.Header>

                    <Accordion.Body className='faqs-p d-flex'>
                        <img src={multiple} alt="" />
                        <p> You could only use WhatsApp Business app on a maximum of two devices at the same time before September 2021. But you cannot use the WhatsApp Business app on two phones. Now under the new beta program, you can use WhatsApp Business app on 5 devices of 1 phone + 4 additional devices for each number.</p>
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>
        </div >
    );
};

export default Faqs;