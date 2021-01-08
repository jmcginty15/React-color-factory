import { Link } from 'react-router-dom';

import './ColorList.css';

const ColorList = ({ colors, clear }) => {
    return (
        <div className="ColorList">
            <div className="ColorList-header">
                <h2>Welcome to the Color Factory.</h2>
                <h1><Link to="/colors/new">Add a new color</Link></h1>
            </div>
            <div className="ColorList-body">
                <h3>Or select a color:</h3>
                {colors.map(color => <p key={color.name} className="ColorList-item"><Link className="ColorList-list" to={`/colors/${color.name}`}>{color.name}</Link></p>)}
                <button id="clear-button" onClick={clear}>Clear colors</button>
            </div>
        </div>
    )
}

export default ColorList;