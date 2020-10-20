export interface Reservation {
  id: number
  tenant_name: string
  tenant_surname: string
  tenant_email: string
  tenant_phone: number
  guest_number: number
  check_in: Date
  check_out: Date
  special_request: string
}
