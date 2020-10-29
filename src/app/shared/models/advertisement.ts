export interface IReviews {
  title: string
  tenantId: number
  description: string
  vote: number
}

export interface IAdvertisement {
  id: number
  landlordId: number
  propertyId: number
  reviews: IReviews[]
  price: number
}

export class Advertisement implements IAdvertisement {
  private constructor(
    public id = null,
    public landlordId = null,
    public propertyId = null,
    public reviews = [],
    public price = null
  ) {}

  static Build(advertisement?: IAdvertisement): Advertisement {
    if (!advertisement) {
      return new Advertisement()
    }
    return new this(
      advertisement.id,
      advertisement.landlordId,
      advertisement.propertyId,
      advertisement.reviews,
      advertisement.price
    )
  }
}
