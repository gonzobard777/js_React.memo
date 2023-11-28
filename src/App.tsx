import {ItemList} from './memo/item-list/item-list';
import s from './App.module.css'


export function App() {

  return (
    <div className={s.container}>
      <ItemList/>
    </div>
  );
}
