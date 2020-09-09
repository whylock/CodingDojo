import React, { useState } from "react";
import Button from "./Button";

const Tab = (props) => {
	const [state, setState] = useState({
		currentTab: 1,
	});
	const onTabClick = (e, value) => {
		setState({
			currentTab: value,
		});
	};
	return (
		<div>
			{[1, 2, 3].map((v, i) => (
				<Button key={i} onClick={(e) => onTabClick(e, v)} selected={state.currentTab === v}>
					{" "}
					{v}
				</Button>
			))}
			<p>Tab {state.currentTab} is open!</p>
		</div>
	);
};
export default Tab;
