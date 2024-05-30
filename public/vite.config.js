import { defineConfig } from 'vite'

import {resolve} from 'path'


export default defineConfig({

  build : {
    rollupOptions:{
        input:{
            main : resolve(__dirname,"index.html"),
            about : resolve(__dirname,"about.html"),
            products : resolve(__dirname,"products.html"),
            contacts : resolve(__dirname,"contacts.html"),
            addToCart : resolve(__dirname,"addToCart.html"),
        },
    },
  },
});