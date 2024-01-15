import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import person from "./person"

export const schemaTypes = [post, blockContent, person]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, person],
}
