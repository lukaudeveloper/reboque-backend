/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

export type { Route, Path } from './schema.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [[0,"api"],[0,"v1"],[0,"auth"],[0,"signup"]],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [[0,"api"],[0,"v1"],[0,"auth"],[0,"login"]],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'account.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"profile"]],
    types: placeholder as Registry['account.profile.show']['types'],
  },
  'account.profile.update': {
    methods: ["PUT"],
    pattern: '/api/v1/account/profile',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"profile"]],
    types: placeholder as Registry['account.profile.update']['types'],
  },
  'account.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"logout"]],
    types: placeholder as Registry['account.access_tokens.destroy']['types'],
  },
  'account.verify_otps.store': {
    methods: ["POST"],
    pattern: '/api/v1/account/verify-otp',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"verify-otp"]],
    types: placeholder as Registry['account.verify_otps.store']['types'],
  },
  'account.verify_otps.resend': {
    methods: ["POST"],
    pattern: '/api/v1/account/resend-otp',
    tokens: [[0,"api"],[0,"v1"],[0,"account"],[0,"resend-otp"]],
    types: placeholder as Registry['account.verify_otps.resend']['types'],
  },
  'admin.admin_documents.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/documents',
    tokens: [[0,"api"],[0,"v1"],[0,"admin"],[0,"documents"]],
    types: placeholder as Registry['admin.admin_documents.index']['types'],
  },
  'admin.admin_documents.approve': {
    methods: ["PUT"],
    pattern: '/api/v1/admin/documents/:id/approve',
    tokens: [[0,"api"],[0,"v1"],[0,"admin"],[0,"documents"],[1,"id"],[0,"approve"]],
    types: placeholder as Registry['admin.admin_documents.approve']['types'],
  },
  'admin.admin_documents.reject': {
    methods: ["PUT"],
    pattern: '/api/v1/admin/documents/:id/reject',
    tokens: [[0,"api"],[0,"v1"],[0,"admin"],[0,"documents"],[1,"id"],[0,"reject"]],
    types: placeholder as Registry['admin.admin_documents.reject']['types'],
  },
  'cliente.vehicles.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"]],
    types: placeholder as Registry['cliente.vehicles.index']['types'],
  },
  'cliente.vehicles.store': {
    methods: ["POST"],
    pattern: '/api/v1/cliente/vehicles',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"]],
    types: placeholder as Registry['cliente.vehicles.store']['types'],
  },
  'cliente.vehicles.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"id"]],
    types: placeholder as Registry['cliente.vehicles.show']['types'],
  },
  'cliente.vehicles.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/cliente/vehicles/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"id"]],
    types: placeholder as Registry['cliente.vehicles.update']['types'],
  },
  'cliente.vehicles.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/cliente/vehicles/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"id"]],
    types: placeholder as Registry['cliente.vehicles.destroy']['types'],
  },
  'cliente.vehicle_documents.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"vehicleId"],[0,"documents"]],
    types: placeholder as Registry['cliente.vehicle_documents.index']['types'],
  },
  'cliente.vehicle_documents.store': {
    methods: ["POST"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"vehicleId"],[0,"documents"]],
    types: placeholder as Registry['cliente.vehicle_documents.store']['types'],
  },
  'cliente.vehicle_documents.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents/:id',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"vehicleId"],[0,"documents"],[1,"id"]],
    types: placeholder as Registry['cliente.vehicle_documents.destroy']['types'],
  },
  'cliente.vehicle_documents.download': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents/:id/download',
    tokens: [[0,"api"],[0,"v1"],[0,"cliente"],[0,"vehicles"],[1,"vehicleId"],[0,"documents"],[1,"id"],[0,"download"]],
    types: placeholder as Registry['cliente.vehicle_documents.download']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
