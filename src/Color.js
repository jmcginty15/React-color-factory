import { Redirect, Link, useParams } from 'react-router-dom';
import './Color.css';
import getColor from './helpers';

const Color = () => {
    const { color } = useParams();
    const colorObject = getColor(color);

    if (colorObject) {
        return (
            <div className="Color" style={{ backgroundColor: colorObject.color }}>
                <h1>This is {colorObject.name}.</h1>
                <h2>Isn't it beautiful?</h2>
                <h1><Link to="/colors">Back to the list</Link></h1>
            </div>
        )
    } else {
        return <Redirect to="/colors" />
    }
}

export default Color;