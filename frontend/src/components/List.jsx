import ListItem from "./ListItem";

function List({ list }){
    return (
        <ul>
            {
                list.map((item) => (
                    <ListItem key={item.id} content={item.title} />
                ))
            }
        </ul>
    );
}

export default List
