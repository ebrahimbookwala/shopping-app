import React from "react";
import logo from "./logo.svg";
import "./App.css";

//TDO create a link component

interface Props {
	/**
	 * This is the url of the link
	 */
	url: string;
	className?: string;
	children: React.ReactNode;
}

const Link = ({ url, children }: Props) => {
	return <a href={url}>{children}</a>;
};

function App() {
	return <div className="App"></div>;
}

export default App;
