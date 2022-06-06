

const Item = ({ id, name, stock, cost, pictureUrl }) => {
    return (
        <div>
            <div />
            <div src={pictureUrl} />
            <div>
                <div>
                    <div /><strong>$ {cost}</strong>
                </div>
                <div>
                    <div/>{stock} unid.
                </div>
            </div>
        </div>
    );
}

export default Item;