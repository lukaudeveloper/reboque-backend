import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'account.profile.show': { paramsTuple?: []; params?: {} }
    'account.profile.update': { paramsTuple?: []; params?: {} }
    'account.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'account.verify_otps.store': { paramsTuple?: []; params?: {} }
    'account.verify_otps.resend': { paramsTuple?: []; params?: {} }
    'admin.admin_documents.index': { paramsTuple?: []; params?: {} }
    'admin.admin_documents.approve': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.admin_documents.reject': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicles.index': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.store': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicles.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicles.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicle_documents.index': { paramsTuple: [ParamValue]; params: {'vehicleId': ParamValue} }
    'cliente.vehicle_documents.store': { paramsTuple: [ParamValue]; params: {'vehicleId': ParamValue} }
    'cliente.vehicle_documents.destroy': { paramsTuple: [ParamValue,ParamValue]; params: {'vehicleId': ParamValue,'id': ParamValue} }
    'cliente.vehicle_documents.download': { paramsTuple: [ParamValue,ParamValue]; params: {'vehicleId': ParamValue,'id': ParamValue} }
  }
  GET: {
    'account.profile.show': { paramsTuple?: []; params?: {} }
    'admin.admin_documents.index': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.index': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicle_documents.index': { paramsTuple: [ParamValue]; params: {'vehicleId': ParamValue} }
    'cliente.vehicle_documents.download': { paramsTuple: [ParamValue,ParamValue]; params: {'vehicleId': ParamValue,'id': ParamValue} }
  }
  HEAD: {
    'account.profile.show': { paramsTuple?: []; params?: {} }
    'admin.admin_documents.index': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.index': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicle_documents.index': { paramsTuple: [ParamValue]; params: {'vehicleId': ParamValue} }
    'cliente.vehicle_documents.download': { paramsTuple: [ParamValue,ParamValue]; params: {'vehicleId': ParamValue,'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'account.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'account.verify_otps.store': { paramsTuple?: []; params?: {} }
    'account.verify_otps.resend': { paramsTuple?: []; params?: {} }
    'cliente.vehicles.store': { paramsTuple?: []; params?: {} }
    'cliente.vehicle_documents.store': { paramsTuple: [ParamValue]; params: {'vehicleId': ParamValue} }
  }
  PUT: {
    'account.profile.update': { paramsTuple?: []; params?: {} }
    'admin.admin_documents.approve': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'admin.admin_documents.reject': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicles.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'cliente.vehicles.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'cliente.vehicles.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'cliente.vehicle_documents.destroy': { paramsTuple: [ParamValue,ParamValue]; params: {'vehicleId': ParamValue,'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}