import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partner from 'App/Models/Partner';
import School from 'App/Models/School';

export default class SchoolsController {

  public async store({request, params, response}: HttpContextContract) {
    const body = request.body();
    const partnerId = params.partnerId;

    await Partner.findOrFail(partnerId);

    body.partnerId = partnerId;

    const school = await School.create(body);

    response.status(201);

    return {
      message: 'Comentário adicionado com sucesso',
      data: school
    }
  }

}
