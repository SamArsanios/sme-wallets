/**
 * provide the http base url for the application
 */
export class HTTPBase {
  /**
   * @returns the base url with the concatenation of the URL added
   * this base if for `http` and not `https`
   * @param concatenatedUrl the url to be `concatenated`
   */
  static getBaseURL(concatenatedUrl: string): string {
    // http://localhost:8081/api/smewallets
    // https://jsonplaceholder.typicode.com/posts
    // http://dummy.restapiexample.com
    // http://corrda.herokuapp.com/api/smewallets
    return `http://corrda.herokuapp.com/api/smewallets`.concat(
      concatenatedUrl
    );
  }

  static getBaseURLWebSocket(): string {
    return `https://corrda.herokuapp.com/socket`;
  }

  /**
   * @returns the base url with the concatenation of the URL added
   * this base if for `https` and not `http`
   * @param concatenatedUrl the url to be `concatenated`
   */
  static getBaseURLSecure(concatenatedUrl: string): string {
    return `https://localhost:8081/api/smewallets`.concat(concatenatedUrl);
  }
}
