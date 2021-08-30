import React from 'react';
import { Menu } from 'antd';
import {useState} from 'react';

const NavBar = () => {

    const [current, setCurrent] = useState('mail')
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail">
          Home
        </Menu.Item>
        {/* <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Two - Link
          </a>
        </Menu.Item> */}
      </Menu>
    )
}

export default NavBar
