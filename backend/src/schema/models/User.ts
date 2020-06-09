import { objectType } from '@nexus/schema'

export const User = objectType({
    name: 'User',
    description: 'Single User, guest or host',
    definition: t => {
        t.model.id()
        t.model.name()
    }
})