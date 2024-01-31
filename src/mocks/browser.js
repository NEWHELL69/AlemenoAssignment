import { setupWorker } from 'msw/browser'
import { handlers } from './handlers.js'

import { http, HttpResponse } from 'msw'
import students from "./data/students.js"
 
// export const worker = setupWorker(...handlers)

export const worker = setupWorker(...handlers);