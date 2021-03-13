import React from 'react';
import '../static/style/components/header.css'
import { Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = (props) => (
    <div className='header'>
        <Row justify='center'>
            <Col xs={24} sm={24} md={10} lg={15} xl={12} className='header-title'>
                <Link to='/'><span className='header-logo'>南瓜哥的博客</span></Link>
                <span className='header-txt'>程序员成长之旅</span>
            </Col>
            <Col xs={24} sm={24} md={14} lg={8} xl={6}>
                <Menu mode='horizontal'>
                    <Menu.Item key='home'>
                        <Link to='/'>首页</Link>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;