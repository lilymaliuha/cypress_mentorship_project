import ProfilePage from '../pageObjects/profile.page'
import { ApiClient } from '../api/api.client'

describe('Profile tests', function () {
  const baseClient = new ApiClient()
  const profilePage = new ProfilePage()

  beforeEach(function () {
    baseClient.authorize()
    profilePage.openProfilePage()
    cy.fixture('testData').then(testData => {
      this.testData = testData
    })
  })

  it('user should be able to upload profile picture', function () {
    profilePage.uploadProfilePicture(this.testData[0].fileToUpload)

    profilePage.elements.profilePictureImg().should('have.attr','src', this.testData[0].profilePictureSrc)
    profilePage.getProfileEmail().then((profileEmail) => {
      expect(profileEmail).equal( Cypress.env('username'))
    })
  })
})
