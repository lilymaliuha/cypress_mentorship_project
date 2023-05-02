class ProfilePage {
  elements = {
    uploadPictureInput: () => cy.get('#picture'),
    uploadPictureButton: () => cy.get('[aria-label="Button to upload the profile picture"]'),
    profileEmail: () => cy.get('#email'),
    profilePictureImg: () => cy.get('[alt="profile picture"]')
  }

  openProfilePage() {
    cy.visit('/profile');
  }

  uploadProfilePicture (pictureName) {
    this.elements.uploadPictureInput().attachFile(pictureName);
    this.elements.uploadPictureButton().click();
  }

  getProfileEmail() {
    return this.elements.profileEmail().invoke('val');

  }
}

export default ProfilePage;
