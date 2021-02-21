import { Item, Title, Meta, Time, Flag } from '../style';
import { Link } from 'react-router-dom'
function BlogItem(props) {
    const { title, time, flag, id } = props;
    return (
        <Item>
            <Title><Link to={`/blog/${id}`}>{title} </Link></Title>
            <Meta>
                <Time>{time}</Time>
                <Flag>{`标签：${flag}`}</Flag>
            </Meta>
        </Item>)

}

export default BlogItem;