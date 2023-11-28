import {useCallback, useState} from 'react';
import s from './item-list.module.css';
import {Item} from '../item/item';

const itemsInitState = [
  {
    id: '1dcdf741-5140-45c1-ac2d-8512339c20df',
    label: 'First Item',
  },
  {
    id: 'f87f7a2d-92ab-4890-909a-0795699e7f21',
    label: 'Second Item',
  },
  {
    id: '8a6ff044-80fb-4fd7-b021-9eed7f9ffc24',
    label: 'Third Item',
  },
];

export function ItemList() {
  const [items, setItems] = useState(itemsInitState);

  // const remove = (id: string) => setItems((prev) => prev.filter((item) => item.id !== id));
  const remove = useCallback(
    (id: string) => setItems((prev) => prev.filter((item) => item.id !== id)),
    []
  );

  return (
    <div className={s.itemList}>

      {/*{items[0] ? <Item key={items[0].id} item={items[0]} remove={remove}/> : null}*/}
      {/*{items[1] ? <Item key={items[1].id} item={items[1]} remove={remove}/> : null}*/}
      {/*{items[2] ? <Item key={items[2].id} item={items[2]} remove={remove}/> : null}*/}
      {items.map(item =>
        <Item key={item.id}
              item={item}
              remove={remove}/>
      )}
    </div>
  );
}
