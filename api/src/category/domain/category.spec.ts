import { Category } from "./category";
import {omit} from 'lodash'
describe('Category Unit Tests', () => {
  test('should create a valid category', () => {
    let category = new Category({
      name: 'any_name',
    })

    let props = omit(category.props, ['created_at'])

    expect(props).toStrictEqual({
      name: 'any_name',
      description: null,
      is_active: true,
    })

    expect(category.created_at).toBeInstanceOf(Date)

    let created_at = new Date()

    category = new Category({
      name: 'any_name',
      description: 'any_description',
      is_active: false,
      created_at,
    })

    expect(category.props).toStrictEqual({
      name: 'any_name',
      description: 'any_description',
      is_active: false,
      created_at,
    })

    category = new Category({
      name: 'any_name',
      description: 'any_description',
    })
    
    expect(category.props).toMatchObject({
      name: 'any_name',
      description: 'any_description',
    })

    category = new Category({
      name: 'any_name',
      is_active: true,
    })
    
    expect(category.props).toMatchObject({
      name: 'any_name',
      is_active: true,
    })

    created_at = new Date()

    category = new Category({
      name: 'any_name',
      created_at,
    })
    
    expect(category.props).toMatchObject({
      name: 'any_name',
      created_at
    })
  })
});