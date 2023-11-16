import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';
import './info.scss';

const listRule = [
  'Выберите категорию и напишите название текущей задачи',
  'Запустите таймер («помидор»)',
  'Работайте пока «помидор» не прозвонит',
  'Сделайте короткий перерыв (3-5 минут)',
  'Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).',
];

export function Info() {

  return (
    <div className="info">

      <h1 className="info__title">
        Ура! Теперь можно начать работать:
      </h1>

      <ul className="info__list">
        {listRule.map(text => (
          <li className="info__item" key={ (()=> Math.random())()}>
            {text}
          </li>
        ))}
      </ul>

      <TaskForm />
      <TaskList />
    </div>
  );
}
