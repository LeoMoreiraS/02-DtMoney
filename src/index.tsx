import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models:{
    transaction: Model,
    
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freela',
          type: 'deposit',
          amount: 3000,
          category: 'Dev',
          createdAt: new Date('2022-04-26 10:00:00')
        },
        {
          id:2,
          title: 'Compra',
          type: 'withdraw',
          amount: 500,
          category: 'Casa',
          createdAt: new Date('2022-04-23 10:00:00')
        },
        {
          id:3,
          title: 'Salário',
          type: 'deposit',
          amount: 1000,
          category: 'Normal',
          createdAt: new Date('2022-04-22 10:00:00')
        },
      ],
      
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions',()=>{
      return [
        this.schema.all('transaction')
      ]
    })
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

