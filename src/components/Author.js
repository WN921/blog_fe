import { Avatar, Divider, Tooltip } from "antd";
import Ace from "../static/Ace.jpg";
import "../static/style/components/author.css";
import { GithubOutlined, WechatOutlined, QqOutlined } from "@ant-design/icons";

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src={Ace} />
      </div>
      <div className="author-introduction">
        未入门的前端程序员
        <Divider> 社交帐号 </Divider>
        <Tooltip title="WN921">
          <Avatar
            size={28}
            icon={<GithubOutlined className="account" />}
            className="account"
          >
            GitHub
          </Avatar>
        </Tooltip>
        <Tooltip title="muteer7205768">
          <Avatar size={28} icon={<WechatOutlined />} className="account">
            微信
          </Avatar>
        </Tooltip>
        <Tooltip title="3192628842">
          <Avatar size={28} icon={<QqOutlined />} className="account">
            QQ
          </Avatar>
        </Tooltip>
      </div>
    </div>
  );
};

export default Author;
