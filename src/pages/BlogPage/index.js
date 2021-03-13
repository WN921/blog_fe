import React, { useEffect } from 'react';
import { Author } from '../../components';
import { Row, Col, Affix, Empty } from 'antd';
import { CalendarTwoTone, FolderTwoTone } from '@ant-design/icons';
import '../../static/style/pages/blogPage.css';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import '../../static/style/components/markdown.css';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import CodeBlock from '../../api/markdown/CodeBlock';
import HeadingBlock from '../../api/markdown/HeadingBlock';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {render} from 'react-dom'
const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={dark} language={language} children={value} />
    }
  }
  



function BlogPage(props) {
    const BlogInfo = props.BlogInfo;
    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value
        }
    });

    useEffect(() => {
        props.initPage(props.match.params.id);

    }, [])
    // let HTML;
    // if (JSON.stringify(BlogInfo) !== '{}') {
    //     HTML = marked(BlogInfo.content);
    // }
    // let 
    return (
        <>
            {
                JSON.stringify(BlogInfo) === '{}' ? <Empty /> : (
                    <Row className='comm-main' justify='center'>
                        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
                            <div className='blogPage-title'>{BlogInfo.title}</div>
                            <div className='list-icon center'>
                                <CalendarTwoTone /><span className='list-icon-span'>创建：{BlogInfo.createdAt}</span>
                                <CalendarTwoTone /><span className='list-icon-span'>修改：{BlogInfo.updatedAt}</span>
                                <FolderTwoTone /><span className='list-icon-span'>JavaScript</span>
                            </div>
                            {/* dangerouslySetInnerHTML={{ __html: HTML }} */}
                            <div className='blogPage-content' >
                                <ReactMarkdown plugins={[gfm]} children={BlogInfo.content} renderers={renderers} />
                            </div>
                        </Col>
                        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
                            <Author />
                            <Affix offset={5}>
                                <div className='blogPage-nav comm-box'>
                                    <div className='nav-title'>文章目录</div>
                                    <MarkNav className='artitle-menu' source={BlogInfo.content} ordered={false} />
                                </div>
                            </Affix>
                        </Col>
                    </Row>
                )
            }
        </>
    );
}

const mapStateToProps = (state) => ({
    BlogInfo: state.BlogPage.BlogInfo
})
export default connect(mapStateToProps, actionCreators)(React.memo(BlogPage));