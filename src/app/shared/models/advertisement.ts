interface IReviews {
  title: string
  tenantId: number
  description: string
  vote: number
}

export class Advertisement {
  landlordId: number
  propertyId: number
  reviews: IReviews[]

  private constructor(advs: Advertisement) {
    this.landlordId = advs.landlordId
    this.propertyId = advs.propertyId
    this.reviews = advs.reviews
  }

  static Build(advertisement: Advertisement): Advertisement {
    return new this(advertisement)
  }

  averageVote() {}
}
