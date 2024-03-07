import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import School from './School'

export default class Partner extends BaseModel {
  @hasMany(() => School)
  public schools: HasMany<typeof School>

  @column({ isPrimary: true })
  public id: number

  @column()
  public cnpj: string

  @column()
  public fantasy_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
