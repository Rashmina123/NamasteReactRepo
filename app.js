import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header

const AppLayout = () => {
    return (
        <div>
            <Header/>
        </div>

    )}

const root = React.createRoot(document.getElementById('root'))
// root.render(<AppLayout></AppLayout>)
root.render(AppLayout())