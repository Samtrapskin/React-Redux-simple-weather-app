import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'

export default (props) => {
<div>
<Sparklines height={120} width={180} data={temps} >
             <SparklinesLine color="blue" />
            </Sparklines>
</div>
}