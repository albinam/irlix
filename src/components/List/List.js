import React, {useEffect, useState} from 'react';
import "./List.scss";

function List() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [itemsList, setItemsList] = useState([]);
    const addItem = () => {
        if (name !== "" && id !== "") {
            setItemsList([...itemsList, {id: id, name: name}]);
            setId("");
            setName("");
        } else {
            alert("Данные введены некорректно");
        }
    }

    useEffect(() => {
        itemsList.sort((a, b) => parseInt(a.id) > parseInt(b.id) ? 1 : -1)
    }, [itemsList]);


    return (
        <div className="list">
            <div className="list__left-block">
                <div className="list__left-block__header-text">Приветствую!</div>
                <div className="list__left-block__text-1">Давай обновим список и начем обучение</div>
                <div className="list__left-block__text-2">Список:</div>
                <div className="list__left-block__items">
                    {itemsList.map(item => (
                        <div className="list__left-block__items__item" key={item.id}>{item.id}) {item.name}</div>
                    ))}
                </div>
            </div>
            <div className='list__block-form'>
                <div className="list__block-form__item">
                    <div className='list__block-form__item__label'>Номер записи</div>
                    <input type='number' className="list__block-form__item__input" value={id} onChange={(e) => {
                        setId(e.target.value)
                    }}/>
                </div>
                <div className="list__block-form__item">
                    <div className='list__block-form__item__label'>Название записи</div>
                    <input className="list__block-form__item__input" type='text' onChange={(e) => {
                        setName(e.target.value)
                    }} value={name}/>
                </div>
                <button className="list__block-form__item__button" onClick={() => addItem()}>Добавить в список</button>
            </div>
        </div>

    );
}

export default List;