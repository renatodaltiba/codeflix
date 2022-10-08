export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
}

export class Category {
  constructor (public readonly props: CategoryProperties) {
    this.description = props.description
    this.is_active = props.is_active
    this.props.created_at = props.created_at ?? new Date()
  }
  get name () {
    return this.props.name
  }
  get description () {
    return this.props.description
  }
  private set description (value) {
    this.props.description =  value ?? null
  }
  private set is_active (value) {
    this.props.is_active = value ?? true
  }
  get is_active () {
    return this.props.is_active
  }
  get created_at () {
    return this.props.created_at
  }
}
