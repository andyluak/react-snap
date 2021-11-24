import e from"styled-components";const t=t=>{const l=e.div`
		height: 100vh;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	`;return React.createElement(l,null,t.children)},l=t=>{let l=e.div`
		height: 100vh;
		scroll-snap-align: start;
	`;return React.createElement(l,null,t.children)};export{t as SnapContainer,l as SnapItem};
