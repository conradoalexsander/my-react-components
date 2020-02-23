// IMPORTANT: THIS COMPONENT USES SEMANTIC UI
// SEMANTIC UI DOCUMENTATION: https://semantic-ui.com/introduction/getting-started.html
// LAST CDN TESTED:  https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
// HEAD: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>

import React from 'react';

const LoadingSpinnerSUI = (props) => {
    return (
        <div className={`${props.icon}`}>
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

LoadingSpinnerSUI.defaultProps = {
    icon: 'ui active inverted dimmer',
    message: 'Loading...'
}

export default LoadingSpinnerSUI;