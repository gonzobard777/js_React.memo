import {memo} from 'react';
import s from './item.module.css';

function ItemComponent({item, remove}: IProps) {

  console.log(`${item.label}`);

  return (
    <div className={s.item}>
      <h2>{item.label}</h2>
      <button onClick={remove.bind(null, item.id)}/>
    </div>
  );
}

interface IProps {

  item: {
    id: string;
    label: string;
  };

  remove(id: string): void;

}

export const Item = memo(ItemComponent);
