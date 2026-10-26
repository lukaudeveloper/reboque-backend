/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  account: {
    profile: {
      show: typeof routes['account.profile.show']
      update: typeof routes['account.profile.update']
    }
    accessTokens: {
      destroy: typeof routes['account.access_tokens.destroy']
    }
    verifyOtps: {
      store: typeof routes['account.verify_otps.store']
      resend: typeof routes['account.verify_otps.resend']
    }
  }
  admin: {
    adminDocuments: {
      index: typeof routes['admin.admin_documents.index']
      approve: typeof routes['admin.admin_documents.approve']
      reject: typeof routes['admin.admin_documents.reject']
    }
  }
  cliente: {
    vehicles: {
      index: typeof routes['cliente.vehicles.index']
      store: typeof routes['cliente.vehicles.store']
      show: typeof routes['cliente.vehicles.show']
      update: typeof routes['cliente.vehicles.update']
      destroy: typeof routes['cliente.vehicles.destroy']
    }
    vehicleDocuments: {
      index: typeof routes['cliente.vehicle_documents.index']
      store: typeof routes['cliente.vehicle_documents.store']
      destroy: typeof routes['cliente.vehicle_documents.destroy']
      download: typeof routes['cliente.vehicle_documents.download']
    }
  }
}
