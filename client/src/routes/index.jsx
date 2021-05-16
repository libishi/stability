import { Error404 } from '../components/layouts/routing-errors/Error404'
import { ProcessingTable } from '../components/applicant/underprocessing/ProcessingTable'
import { ProductsApplicationTable } from '../components/applicant/ready/ProductsApplicationTable'
import {
  ApplicationNew425,
  ApplicationNew296,
  ApplicationNew645,
  ApplicationRE296,
  ApplicationRE425,
} from '../components/applicant/ready/ProductApplication'
import { NewTasks } from '../components/stability-department/reception/NewTasks'
import { NewTasksSecond } from '../components/stability-department/reception/NewTasksSecond'
import { EvaluationTable } from '../components/stability-department/evaluation/EvaluationTable'
import { EvaluationForm } from '../components/stability-department/evaluation/EvaluationForm'

const routes = [
  {
    path: '/',
    component: ProductsApplicationTable,
    name: 'ready',
    exact: true,
  },

  {
    path: '/ApplicationNew296',
    component: ApplicationNew296,
    name: 'ApplicationNew296',
    exact: true,
  },

  {
    path: '/ApplicationNew425',
    component: ApplicationNew425,
    name: 'ApplicationNew425',
    exact: true,
  },

  {
    path: '/ApplicationRE296',
    component: ApplicationRE296,
    name: 'ApplicationRE296',
    exact: true,
  },

  {
    path: '/ApplicationRE425',
    component: ApplicationRE425,
    name: 'ApplicationRE425',
    exact: true,
  },

  {
    path: '/ApplicationNew645',
    component: ApplicationNew645,
    name: 'ApplicationNew645',
    exact: true,
  },

  {
    path: '/ProcessingTable',
    component: ProcessingTable,
    name: 'underprocessing',
    exact: true,
  },

  {
    path: '/NewTasks',
    component: NewTasks,
    name: 'NewTasks',
    exact: true,
  },

  {
    path: '/newtaskssecond',
    component: NewTasksSecond,
    name: 'NewTasksSecond',
    exact: true,
  },

  {
    path: '/EvaluationTable',
    component: EvaluationTable,
    name: 'EvaluationTable',
    exact: true,
  },

  {
    path: '/EvaluationForm',
    component: EvaluationForm,
    name: 'EvaluationForm',
    exact: true,
  },

  {
    path: '*',
    component: Error404,
  },
]

export default routes
