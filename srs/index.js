export default class Validator {
    validateUsername(username) {
      const re = new RegExp('^[a-z][-_a-z0-9]*[a-z]+$', 'gi');
      const re2 = new RegExp('\\d{4,}', 'g');
  
      if (re.test(username)) {
        return !re2.test(username);
      }
      return false;
    }
  }