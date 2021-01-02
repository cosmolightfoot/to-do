import * as yup from 'yup';

export const toDoSchema = yup.object().shape({
  title: yup.string().required('Your To Do Needs a Name').min(3, 'You must have a name longer than 3 characters'),
  unnecessaryField: yup.string().strip(),
  completed: yup.boolean()
});

export const toDoDefaults = {
  title: '',
  unnecessaryField: 'should not be here',
  completed: false
}