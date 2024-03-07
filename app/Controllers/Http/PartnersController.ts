import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partner from 'App/Models/Partner'

export default class PartnersController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const { cnpj, fantasy_name } = request.only(['cnpj', 'fantasy_name'])

      const existingPartner = await Partner.findBy('cnpj', cnpj)
      if (existingPartner) {
        return response.status(400).send({ error: 'CNPJ already exists' })
      }

      const newPartner = await Partner.create({ cnpj, fantasy_name })

      return response.status(201).send(newPartner)
    } catch (error) {
      return response.status(500).send({ error: 'Internal Server Error' })
    }
  }

  public async index() {
    const partners = await Partner.query().preload('schools');

    return partners
  }

  public async deleteAll() {
    const parters = await Partner.all()

    parters.forEach((partner) => partner.delete())
  }
}
