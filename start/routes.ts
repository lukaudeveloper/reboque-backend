import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => ({ name: 'TowLink API', version: '1.0' }))

router.group(() => {
  // Público
  router.group(() => {
    router.post('signup', [controllers.NewAccount, 'store'])
    router.post('login', [controllers.AccessTokens, 'store'])
  }).prefix('auth').as('auth')

  // Autenticado (qualquer role)
  router.group(() => {
    router.get('profile', [controllers.Profile, 'show'])
    router.put('profile', [controllers.Profile, 'update'])
    router.post('logout', [controllers.AccessTokens, 'destroy'])
    router.post('verify-otp', [controllers.VerifyOtps, 'store'])
    router.post('resend-otp', [controllers.VerifyOtps, 'resend'])
  }).prefix('account').as('account').use(middleware.auth())

  // Admin
  router.group(() => {
    router.get('documents', [controllers.AdminDocuments, 'index'])
    router.put('documents/:id/approve', [controllers.AdminDocuments, 'approve'])
    router.put('documents/:id/reject', [controllers.AdminDocuments, 'reject'])
  }).prefix('admin').as('admin').use(middleware.auth())

  // Cliente
  router.group(() => {
    router.resource('vehicles', controllers.Vehicles).apiOnly()
    router.get('vehicles/:vehicleId/documents', [controllers.VehicleDocuments, 'index'])
    router.post('vehicles/:vehicleId/documents', [controllers.VehicleDocuments, 'store'])
    router.delete('vehicles/:vehicleId/documents/:id', [controllers.VehicleDocuments, 'destroy'])
    router.get('vehicles/:vehicleId/documents/:id/download', [controllers.VehicleDocuments, 'download'])
  }).prefix('cliente').as('cliente').use(middleware.auth())
}).prefix('/api/v1')
