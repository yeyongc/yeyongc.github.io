/// <reference types="vite/client" />
const service = axios.create({

  baseURL:

   process.env.NODE_ENV === 'dev'

      ? process.env.VUE_APP_DEV_API

      : process.env.VUE_APP_PRODUCTION_API,

  timeout: 10000

})
