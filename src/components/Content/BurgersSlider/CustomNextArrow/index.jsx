export const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'green',
                borderRadius: '50%'
            }}
            onClick={onClick}
        />  

    )
};