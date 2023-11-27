import { type HttpBackendOptions } from 'i18next-http-backend'

export const backendOptions: HttpBackendOptions = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
  addPath: '/locales/add/{{lng}}/{{ns}}',
  // allow cross domain requests
  crossDomain: false,
  // allow credentials on cross domain requests
  withCredentials: false,
  requestOptions: {
    // used for fetch, can also be a function (payload) => ({ method: 'GET' })
    mode: 'cors',
    credentials: 'same-origin',
    cache: 'default'
  },
  queryStringParams: { v: '1.3.5' },
  reloadInterval: false // can be used to reload resources in a specific interval (milliseconds) (useful in server environments)
}
