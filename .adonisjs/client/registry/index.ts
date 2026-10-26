/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_tokens.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_tokens.store']['types'],
  },
  'account.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['account.profile.show']['types'],
  },
  'account.profile.update': {
    methods: ["PUT"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['account.profile.update']['types'],
  },
  'account.access_tokens.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/account/logout',
    tokens: [{"old":"/api/v1/account/logout","type":0,"val":"api","end":""},{"old":"/api/v1/account/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/account/logout","type":0,"val":"account","end":""},{"old":"/api/v1/account/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['account.access_tokens.destroy']['types'],
  },
  'account.verify_otps.store': {
    methods: ["POST"],
    pattern: '/api/v1/account/verify-otp',
    tokens: [{"old":"/api/v1/account/verify-otp","type":0,"val":"api","end":""},{"old":"/api/v1/account/verify-otp","type":0,"val":"v1","end":""},{"old":"/api/v1/account/verify-otp","type":0,"val":"account","end":""},{"old":"/api/v1/account/verify-otp","type":0,"val":"verify-otp","end":""}],
    types: placeholder as Registry['account.verify_otps.store']['types'],
  },
  'account.verify_otps.resend': {
    methods: ["POST"],
    pattern: '/api/v1/account/resend-otp',
    tokens: [{"old":"/api/v1/account/resend-otp","type":0,"val":"api","end":""},{"old":"/api/v1/account/resend-otp","type":0,"val":"v1","end":""},{"old":"/api/v1/account/resend-otp","type":0,"val":"account","end":""},{"old":"/api/v1/account/resend-otp","type":0,"val":"resend-otp","end":""}],
    types: placeholder as Registry['account.verify_otps.resend']['types'],
  },
  'admin.admin_documents.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/admin/documents',
    tokens: [{"old":"/api/v1/admin/documents","type":0,"val":"api","end":""},{"old":"/api/v1/admin/documents","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/documents","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/documents","type":0,"val":"documents","end":""}],
    types: placeholder as Registry['admin.admin_documents.index']['types'],
  },
  'admin.admin_documents.approve': {
    methods: ["PUT"],
    pattern: '/api/v1/admin/documents/:id/approve',
    tokens: [{"old":"/api/v1/admin/documents/:id/approve","type":0,"val":"api","end":""},{"old":"/api/v1/admin/documents/:id/approve","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/documents/:id/approve","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/documents/:id/approve","type":0,"val":"documents","end":""},{"old":"/api/v1/admin/documents/:id/approve","type":1,"val":"id","end":""},{"old":"/api/v1/admin/documents/:id/approve","type":0,"val":"approve","end":""}],
    types: placeholder as Registry['admin.admin_documents.approve']['types'],
  },
  'admin.admin_documents.reject': {
    methods: ["PUT"],
    pattern: '/api/v1/admin/documents/:id/reject',
    tokens: [{"old":"/api/v1/admin/documents/:id/reject","type":0,"val":"api","end":""},{"old":"/api/v1/admin/documents/:id/reject","type":0,"val":"v1","end":""},{"old":"/api/v1/admin/documents/:id/reject","type":0,"val":"admin","end":""},{"old":"/api/v1/admin/documents/:id/reject","type":0,"val":"documents","end":""},{"old":"/api/v1/admin/documents/:id/reject","type":1,"val":"id","end":""},{"old":"/api/v1/admin/documents/:id/reject","type":0,"val":"reject","end":""}],
    types: placeholder as Registry['admin.admin_documents.reject']['types'],
  },
  'cliente.vehicles.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles',
    tokens: [{"old":"/api/v1/cliente/vehicles","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles","type":0,"val":"vehicles","end":""}],
    types: placeholder as Registry['cliente.vehicles.index']['types'],
  },
  'cliente.vehicles.store': {
    methods: ["POST"],
    pattern: '/api/v1/cliente/vehicles',
    tokens: [{"old":"/api/v1/cliente/vehicles","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles","type":0,"val":"vehicles","end":""}],
    types: placeholder as Registry['cliente.vehicles.store']['types'],
  },
  'cliente.vehicles.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles/:id',
    tokens: [{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cliente.vehicles.show']['types'],
  },
  'cliente.vehicles.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/cliente/vehicles/:id',
    tokens: [{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cliente.vehicles.update']['types'],
  },
  'cliente.vehicles.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/cliente/vehicles/:id',
    tokens: [{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cliente.vehicles.destroy']['types'],
  },
  'cliente.vehicle_documents.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents',
    tokens: [{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":1,"val":"vehicleId","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"documents","end":""}],
    types: placeholder as Registry['cliente.vehicle_documents.index']['types'],
  },
  'cliente.vehicle_documents.store': {
    methods: ["POST"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents',
    tokens: [{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":1,"val":"vehicleId","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents","type":0,"val":"documents","end":""}],
    types: placeholder as Registry['cliente.vehicle_documents.store']['types'],
  },
  'cliente.vehicle_documents.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents/:id',
    tokens: [{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":1,"val":"vehicleId","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":0,"val":"documents","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cliente.vehicle_documents.destroy']['types'],
  },
  'cliente.vehicle_documents.download': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents/:id/download',
    tokens: [{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":0,"val":"api","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":0,"val":"v1","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":0,"val":"cliente","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":0,"val":"vehicles","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":1,"val":"vehicleId","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":0,"val":"documents","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":1,"val":"id","end":""},{"old":"/api/v1/cliente/vehicles/:vehicleId/documents/:id/download","type":0,"val":"download","end":""}],
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
