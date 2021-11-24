import React from 'react';
import { storiesOf } from '@storybook/react';

import { SnapContainer } from '../components/SnapContainer/SnapContainer';
import { SnapItem } from '../components/SnapItem/SnapItem';

const stories = storiesOf('React Snap', module);

stories.add('Snap', () => {
	return (
		<SnapContainer>
			<SnapItem>
				<h1>Snap Item 1</h1>
			</SnapItem>
			<SnapItem>
				<h1>Snap Item 2</h1>
			</SnapItem>
			<SnapItem>
				<h1>Snap Item 3</h1>
			</SnapItem>
		</SnapContainer>
	);
})