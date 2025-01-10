import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log('Breakpoint:', broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log('Collapsed:', collapsed, 'Type:', type);
                }}
            >
                <div
                    style={{
                        color: 'white',
                        height: '4rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <h1>PH Uni</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}

                />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    PH Uni ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
