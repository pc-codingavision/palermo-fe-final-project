interface IReviews {
  title: string
  name: string
  description: string
}

export class Advertisement {
  landlordId: number
  propertyId: number
  imagePath: string[]
  rooms: number
  beds: number
  numberOfToilet: number
  city: string
  description: string
  facilities: {
    tv: boolean
    wifi: boolean
    breakfastIncluded: boolean
    parking: boolean
    kitchen: boolean
    shower: boolean
    bath: boolean
  }
  reviews: IReviews[]
  vote: number

  private constructor(advs: Advertisement) {
    this.landlordId = advs.landlordId
    this.propertyId = advs.propertyId
    this.imagePath = advs.imagePath
    this.rooms = advs.rooms
    this.beds = advs.beds
    this.numberOfToilet = advs.numberOfToilet
    this.city = advs.city
    this.description = advs.description
    this.facilities = advs.facilities
    this.reviews = advs.reviews
    this.vote = advs.vote
  }

  static Build(advertisement: Advertisement): Advertisement {
    return new this(advertisement)
  }
}
