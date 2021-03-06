import React, { Component } from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router';
import axios from 'axios';

export default class extends Component {
    constructor(props) {
        super(props);
        this.info = this.info.bind(this);
        this.routerWillLeave = this.routerWillLeave.bind(this);
    }

    // componentDidMount() {
    //     axios.get('http://g.cn').then(da => {
    //         console.log(da);
    //     });
    // }

    async componentDidMount() {
        let da = await axios.get('http://g.cn');
        console.log(da);
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        );
    }

    routerWillLeave(nextLocation) {
        // 返回 false 会继续停留当前页面，
        // 否则，返回一个字符串，会显示给用户，让其自己决定
        console.log('1232131231232');
    }

    info() {
        message.info('This is a normal message');
    }

    render() {
        return <div>
            <Link to="/">首页</Link> <Link to="/test">test页</Link> <Link to="/test/demo01">demo01页</Link>
            <h2>i am index</h2>
            <p>now you are in index page!</p>
            <Button type="primary" onClick={this.info}>Display normal message</Button>
        </div>;
    }
}