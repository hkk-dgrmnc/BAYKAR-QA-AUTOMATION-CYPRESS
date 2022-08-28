import { random_emails } from './CollectedRandomData/random_email.js'
import { random_passwords } from './CollectedRandomData/random_password.js'

class SelectRandomPerson {
  randomPerson() {
    const randomPassword = Math.floor(Math.random(random_passwords) * 3)
    const selectedPassword = random_passwords[randomPassword]
    const randomEmail = Math.floor(Math.random(random_emails) * 49)
    const selectedEmail = random_emails[randomEmail]

    return {
      selectedPassword,
      selectedEmail,
    }
  }
}

export default SelectRandomPerson