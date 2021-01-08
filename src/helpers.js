function getColor(name) {
    const colors = JSON.parse(localStorage.getItem('colors'));
    if (colors) {
        for (let color of colors) {
            if (color.name === name) return color;
        }
    }
    return null;
}

export default getColor;