import React, { useEffect } from 'react';
import '../index.css';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link, Route, Switch } from "react-router-dom";
import { Layout1 } from '../Layout1';
import CardView from './views/CardView';
import Tableview from './views/Tableview';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/action/userAction';


const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined].map(
	(icon, index) => {
		const key = String(index + 1);

		return {
			key: `sub${key}`,
			//   icon: React.createElement(icon),
			label: `MENU`,

			children: new Array(2).fill(null).map((_, j) => {
				const subKey = index + j;
				const val = ["Card View", "Table View"]
				const link = ["/cardView", "/tableView"]
				return {
					key: subKey,
					// label: `User List ${val[subKey]}`, 
					label: <Link to={
						{
							pathname: link[subKey],
							state: `User List ${val[subKey]}`
						}

					}>{`User List ${val[subKey]}`}</Link>,
				};
			}),
		};
	},
);

const Dashboard: React.FC = () => {
	
	const dispatch: any = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers())
	  }, [])

return	<Layout>
		<Header className="header" style={{ backgroundColor: '#360d0d', color: "#fff", textAlign: "center", justifyItems: "center" }}>
			{/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
			<h2>USER LIST</h2>
		</Header>
		<Layout>
			<Sider width={200} className="site-layout-background">
				<Menu
					mode="inline"
					defaultSelectedKeys={['0']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
					items={items2}
				/>
			</Sider>
			<Layout style={{ padding: '0 24px 24px' }}>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						minHeight: 480,
					}}
				>
					<Route
						render={
							({ location }) => (
								<Layout1 location={location}>
									<Switch location={location}>
										<Route exact path="/cardView" component={() => <CardView data={location.state} />} />
										<Route exact path="/tableView" component={() => <Tableview data={location.state} />} />
									</Switch>
								</Layout1>
							)}
					/>
				</Content>
			</Layout>
		</Layout>
	</Layout>
};

export default Dashboard;