export interface IReviews {
  title: string
  tenantId: number
  description: string
  vote: number
}
export interface IAdvertisement {
  landlordId: number
  propertyId: number
  reviews: IReviews[]
}

export class Advertisement implements IAdvertisement {
  private constructor(
    public landlordId = null,
    public propertyId = null,
    public reviews = [{ title: '', tenantId: null, description: '', vote: null }]
  ) {}

  static Build(advertisement?: IAdvertisement): Advertisement {
    if (!advertisement) {
      return new Advertisement()
    }
    return new this(
      advertisement.landlordId,
      advertisement.propertyId,
      advertisement.reviews
    )
  }
  averageVote() {}
}
