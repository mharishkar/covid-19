import React from 'react';
import './navbar.scss';
class Navbar extends React.Component {
    render() {
        return (<nav>
            <h2>{this.props.name}</h2>
        </nav>);

    }
}
export default Navbar;