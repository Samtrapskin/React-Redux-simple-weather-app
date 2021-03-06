import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
			</Sparklines>
            <div>
                {average(props.data)}
            </div>
		</div>
	);
};
