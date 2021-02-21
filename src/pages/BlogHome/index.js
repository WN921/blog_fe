import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../../static/style/pages/common.css'
import { Author } from '../../components';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { Row, Col, List, Tag, Pagination, message } from 'antd';
import { CalendarTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { countBlog } from '../../api/request';



function BlogHome(props) {
    const[ BlogCount, setBlogCount] = useState(0);
    useEffect(() => {
        props.initPage();
        countBlog().then(res => {
            if(!res){
                message.error('服务器未响应');
                return false
            }
            if(res.errno !== 0){
                message.error('获取博客数量出错');
                return false
            }
            setBlogCount(res.data.count);
        })
    }, [])
    const changePage = (page, pageSize) => {
        props.changePgaeNumber(page);
        props.changePageSize(pageSize);
        props.changePage();
    }
    return (
        <div>
            <Row className='comm-main' justify='center'>
                <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout='vertical'
                        dataSource={
                            props.BlogList
                        }
                        renderItem={item => (
                            <List.Item key={item.createdAt}>
                                <div className='list-title'><Link to={`/BlogPage/${item.id}`}>{item.title}</ Link></div>
                                <div className='list-icon'>
                                    <CalendarTwoTone /><span className='list-icon-span'>创建：{item.createdAt}</span>
                                    <CalendarTwoTone /><span className='list-icon-span'>修改：{item.updatedAt}</span>
                                    <span className='list-icon-span'>
                                        {item.labels.map((labelItem) => (
                                            <Tag color={labelItem.color} key={labelItem.labelName}>{labelItem.labelName}</Tag>
                                        ))}
                                    </span>
                                </div>
                                <div className='list-context'>{item.abstract}</div>
                            </List.Item>
                        )}
                    />
                    <Pagination className='list-Pagination' defaultCurrent={1} defaultPageSize={10} total={BlogCount} 
                        onChange={changePage}
                    />
                </Col>
                <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                </Col>
            </Row>
        </div>
    );

}
const mapStateToProps = (state) => ({
    BlogList: state.BlogHome.BlogList,
    PageSize: state.BlogHome.pageSize,
    PageNumber: state.BlogHome.pageNumber,
})

export default connect(mapStateToProps, actionCreators)(React.memo(BlogHome));