/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.new_account.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'auth.access_tokens.store': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').loginValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').loginValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'account.profile.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/account/profile'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['show']>>>
    }
  }
  'account.profile.update': {
    methods: ["PUT"]
    pattern: '/api/v1/account/profile'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').updateProfileValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').updateProfileValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/profile_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'account.access_tokens.destroy': {
    methods: ["POST"]
    pattern: '/api/v1/account/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/access_tokens_controller').default['destroy']>>>
    }
  }
  'account.verify_otps.store': {
    methods: ["POST"]
    pattern: '/api/v1/account/verify-otp'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').verifyOtpValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').verifyOtpValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/verify_otps_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/verify_otps_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'account.verify_otps.resend': {
    methods: ["POST"]
    pattern: '/api/v1/account/resend-otp'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/verify_otps_controller').default['resend']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/verify_otps_controller').default['resend']>>>
    }
  }
  'admin.admin_documents.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/admin/documents'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin_documents_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin_documents_controller').default['index']>>>
    }
  }
  'admin.admin_documents.approve': {
    methods: ["PUT"]
    pattern: '/api/v1/admin/documents/:id/approve'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin_documents_controller').default['approve']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin_documents_controller').default['approve']>>>
    }
  }
  'admin.admin_documents.reject': {
    methods: ["PUT"]
    pattern: '/api/v1/admin/documents/:id/reject'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/admin_documents_controller').default['reject']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/admin_documents_controller').default['reject']>>>
    }
  }
  'cliente.vehicles.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cliente/vehicles'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['index']>>>
    }
  }
  'cliente.vehicles.store': {
    methods: ["POST"]
    pattern: '/api/v1/cliente/vehicles'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/vehicle').vehicleValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/vehicle').vehicleValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['store']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'cliente.vehicles.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cliente/vehicles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['show']>>>
    }
  }
  'cliente.vehicles.update': {
    methods: ["PUT","PATCH"]
    pattern: '/api/v1/cliente/vehicles/:id'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/vehicle').updateVehicleValidator)>>
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: ExtractQuery<InferInput<(typeof import('#validators/vehicle').updateVehicleValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['update']>>> | { status: 422; response: { errors: SimpleError[] } }
    }
  }
  'cliente.vehicles.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/cliente/vehicles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicles_controller').default['destroy']>>>
    }
  }
  'cliente.vehicle_documents.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { vehicleId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['index']>>>
    }
  }
  'cliente.vehicle_documents.store': {
    methods: ["POST"]
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { vehicleId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['store']>>>
    }
  }
  'cliente.vehicle_documents.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { vehicleId: ParamValue; id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['destroy']>>>
    }
  }
  'cliente.vehicle_documents.download': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cliente/vehicles/:vehicleId/documents/:id/download'
    types: {
      body: {}
      paramsTuple: [ParamValue, ParamValue]
      params: { vehicleId: ParamValue; id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['download']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/vehicle_documents_controller').default['download']>>>
    }
  }
}
