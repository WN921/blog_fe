import React from 'react';
import '../static/style/components/header.css'
import { Row, Col, Menu } from 'antd';

const Header = (props) => (
    <div className='header'>
        <Row justify='center'>
            <Col xs={24} sm={24} md={10} lg={15} xl={12} className='header-title'>
                <span className='header-logo'>王楠的博客</span>
                <span className='header-txt'>菜鸟成长之旅</span>
            </Col>
            <Col xs={24} sm={24} md={14} lg={8} xl={6}>
                <Menu mode='horizontal'>
                    <Menu.Item key='home'>
                        首页
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;