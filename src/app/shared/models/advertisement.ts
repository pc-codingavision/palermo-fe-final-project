import { Property } from './property'

export class Advertisement extends Property {
  getShortDescription() {
    return `${this.rooms} - ${this.numberOfToilet} - ${this.beds} - ${this.toilet}
    ${this.facilities}`
  }

  getLandlordProperty() {
    return `${this.landlordName} - ${this.propertyName} - ${this.category}`
  }

  getImage() {
    return `${this.imagePath}`
  }

  getReviews() {
    return `${this.vote}`
  }
}
