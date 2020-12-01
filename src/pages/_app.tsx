import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <CssBaseline />
            <Component {...pageProps} />
        </Fragment>
    )
}