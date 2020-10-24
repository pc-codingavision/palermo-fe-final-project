interface IReviews {
  title: string
  tenantId: number
  description: string
  vote: number
}

export class Advertisement {
  private constructor(
    public landlordId: number,
    public propertyId: number,
    public reviews: IReviews[]
  ) {}

  static Build(advertisement: Advertisement): Advertisement {
    if (!advertisement) {
      throw new Error('Error: advertisement empty')
    }
    return new this(
      advertisement.landlordId,
      advertisement.propertyId,
      advertisement.reviews
    )
  }
  averageVote() {}
}
