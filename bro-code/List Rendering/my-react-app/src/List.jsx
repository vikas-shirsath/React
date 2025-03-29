
function List(props) {

    const itemList = props.items;
    const category = props.category;

    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id:2, name: "orange", calories: 45}, 
    //                 {id:3, name: "banana", calories: 105}, 
    //                 {id:4, name: "coconut", calories: 159}, 
    //                 {id:5, name: "pineapple", calories: 37}];

    //fruits.sort((a,b) => a.name.localeCompare(b.namee));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));

    // fruits.sort((a,b) => a.calories - b.calories);

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>);

    return( <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);
}

export default List;