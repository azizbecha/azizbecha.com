"use client"

import { AppProgressBar as NProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
    return (
        <NProgressBar
            height="4px"
            color="#BB2649"
            options={{ showSpinner: true }}
            shallowRouting
        />
    )
}

export default ProgressBar