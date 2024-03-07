import Route from '@ioc:Adonis/Core/Route'
import PartnersController from 'App/Controllers/Http/PartnersController'

Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.resource('/partner', 'PartnersController').apiOnly()
  Route.delete('/partner', 'PartnersController.deleteAll')
  Route.post('/partner/:partnerId/schools', 'SchoolsController.store')
}).prefix('/api')
