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

  test('getter of name field', () => {
    const category = new Category({
      name: 'movie',
    })

    expect(category.name).toBe('movie')
  })

  test('getter and setter of description field', () => {
    let category = new Category({
      name: 'movie',
    })

    expect(category.description).toBe(null)

     category = new Category({
      name: 'movie',
      description: 'any_description',
    })

    expect(category.description).toBe('any_description')

    category = new Category({
      name: 'movie',
    })

    category['description'] = 'other description'

    expect(category.description).toBe('other description')

    category['description'] = undefined

    expect(category.description).toBe(null)
  })

  test('getter and setter of is_active field', () => {
    let category = new Category({
      name: 'movie',
    })

    expect(category.is_active).toBe(true)

     category = new Category({
      name: 'movie',
      is_active: false,
    })

    expect(category.is_active).toBe(false)

    category = new Category({
      name: 'movie',
    })

    category['is_active'] = false

    expect(category.is_active).toBe(false)

    category['is_active'] = undefined

    expect(category.is_active).toBe(true)
  })

  test('getter of created_at prop', () => {
    let category = new Category({
      name: 'movie',
    })

    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date()
    category = new Category({
      name: 'movie',
      created_at,
    })

    expect(category.created_at).toBe(created_at)
  })
});