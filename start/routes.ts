import Route from '@ioc:Adonis/Core/Route'
import PartnersController from 'App/Controllers/Http/PartnersController'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.resource('/moments', 'PartnersController').apiOnly()
  Route.delete('/moments', 'PartnersController.deleteAll')
}).prefix('/api')
