
const Body = ({ children, style }) => {
    const defaultStyle = {
        padding: '20px',
        margin: '10px',
        backgroundColor: '#f9f9f9',
        ...style
    };

    return (
        <div style={defaultStyle}>
            {children}
        </div>
    );
};

export default Body;