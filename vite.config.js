import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('env.VITE_BASEURL=', env.VITE_BASEURL)

  return defineConfig({
    base: env.VITE_BASEURL,
    resolve: {
      alias: {
        '/@': '/src',
        '/@public': '/public'
      }
    },
    plugins: [createVuePlugin()]
  })


}