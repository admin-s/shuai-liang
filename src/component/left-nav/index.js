import React,{Component} from 'react'
import { Menu, Icon } from 'antd'

const { SubMenu } = Menu;

class LeftNav extends Component{
    render(){
        return(
            <div>
                {/* <Menu
                    theme= 'dark'
                >
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="menu-unfold" />
                        <span>食品管理</span>
                        </span>
                    }
                    >
                    <Menu.ItemGroup title="食品管理">
                        <Menu.Item key="1">食品列表</Menu.Item>
                        <Menu.Item key="2">添加食品</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
                <Menu
                    theme= 'dark'
                >
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="user" />
                        <span>个人中心</span>
                        </span>
                    }
                    >
                    <Menu.ItemGroup title="个人中心">
                        <Menu.Item key="1">我的页面</Menu.Item>
                        <Menu.Item key="2">权限管理</Menu.Item>
                    </Menu.ItemGroup>
                    </SubMenu>
                </Menu> */}
            </div>
        )
    }
}

export default LeftNav