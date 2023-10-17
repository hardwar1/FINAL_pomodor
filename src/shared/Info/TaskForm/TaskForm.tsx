
import { Btn } from '../../Btn';
import './taskform.scss';

export function TaskForm() {
  return (
    <form className="taskForm">
      <input className="taskForm__input input" type="text" name="taskName" aria-label="Название задачи" placeholder="Название задачи" required />

      <Btn text='Добавить' type='submit' />
    </form>
  );
}
