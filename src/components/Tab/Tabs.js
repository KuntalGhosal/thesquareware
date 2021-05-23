import React from 'react'
import { Tabs } from 'antd';
import '../../index.css'
import Body from '../BodyComponent/Body';
import { Container } from 'react-bootstrap';

const { TabPane } = Tabs;

function callback(key) {

    console.log(key);
}

const Tab = () => (


    <Container className="main-container-tab">
        <div className="card-container">
            <Tabs type="card" className="card-tab" size="middle">
                <TabPane tab="Allgemeines" key="1">
                    <Body />
                </TabPane>
                <TabPane tab="Aussehen" key="2">
                    Content of Tab Aussehen
            </TabPane>
                <TabPane tab="Sonstiges" key="3">
                    Content of Sonstiges
            </TabPane>
                <TabPane tab="Photos" key="4">
                    Content of Photos
            </TabPane>
                <TabPane tab="Settings" key="5">
                    Content of Settings
            </TabPane>
            </Tabs>
        </div>
    </Container>

);

export default Tab;