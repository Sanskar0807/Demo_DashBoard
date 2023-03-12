import React from 'react';

import './Landing.scss';
import { Pathname } from '../../../Pathname';
import MetaComponent from '../../../utils/MetaComponent';
import { Grid } from '@mui/material';

const Landing = () => {

	return (
		<div className="Landing">
			<MetaComponent
				title='User Page'
				description='This is the dummy page description'
				keywords='dummy, keywords, dummy keywords, frontend template, frontend template by antino'
				location={window.location}
				image='og_image.png'
			/>
			<Grid constainer>

			</Grid>
		</div>
	);
}

export default Landing;
