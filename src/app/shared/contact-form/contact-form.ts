export class Contact {
  constructor (
    public contactName = '',
    public email = '',
    public subject = '',
    public message = '',
    public apartment?: string,
    public bookingStart?: string,
    public bookingEnd?: string
  ) {}
}
