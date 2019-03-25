import React from 'react';
import { Link } from 'react-router';
import Content from './sidebar';
/*
This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.

If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
                    <h1><Link to="/">National DB</Link></h1>
*/
class App extends React.Component {
    render() {
        return (

            <div className="main-app">
        
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>

        );
    }
};

export default App;
