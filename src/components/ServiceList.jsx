import { useDispatch, useSelector } from "react-redux"
import { addIdActive, changeForm, removeService } from "../redux/dispatchFunc"
import ItemPrice from "./ItemPrice"

export default function ServiceList() {
    const list = useSelector((state) => state.listService);
    const search = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const deleteClick = (id) => {
        dispatch(removeService(id));
        dispatch(addIdActive(null));
        dispatch(changeForm("clear form"));
    };

    const changeItemPrice = (id) => {
        const itemService = list.find(item => item.id === id);
        dispatch(addIdActive(id));
        dispatch(changeForm("name", itemService.name));
        dispatch(changeForm("price", itemService.price));
    };

    let filteredList = null;

    if (search.query) {
        filteredList = list.map(item => {
            if (!item.name.startsWith(search.query)) {
                return null;
            }

            return (
                <ItemPrice
                    key={item.id}
                    item={item}
                    changeForm={changeItemPrice}
                    deleteClick={deleteClick}
                />
            )
        });
    }

    // if (!filteredList.filter(Boolean).length) {
    //     filteredList = (
    //         <tr>
    //             <td colSpan={tableLength}>
    //                 ничего не найдено
    //             </td>
    //         </tr>
    //     );
    // }

    const services = list.map(item => {
        return (
            <ItemPrice
                key={item.id}
                item={item}
                changeForm={changeItemPrice}
                deleteClick={deleteClick}
            />
        );
    })

    return (
        <ul className="ServiceList">
            {filteredList || services}
        </ul>
    );
}