import React from 'react'

function Usestate() {
const [backgroundColor, setBackgroundColor] = React.useState('red');
return (
    <div>
        <button
            onClick={() => setBackgroundColor('green')}
            style={{
                backgroundColor,
                color: ['blue', 'white'].includes(backgroundColor) ? 'black' : 'white'
            }}
        >
            Click
        </button>
    </div>
)
}

export default Usestate