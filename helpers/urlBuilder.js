import { API_HOST } from "@env";

class GetDiscussionsByCommunityURLBuilder {
  buildUrl(options) {
    const { params } = options;
    const { community } = params;
    return `${API_HOST}/get-discussions-by-community?community=${community}`;
  }
}

export class urlDirector {
  type;
  options;
  URL;

  constructor(type, options) {
    this.type = type;
    this.options = options;
    this.URL = "";
  }

  buildUrl() {
    let urlBuilder;

    switch (this.type) {
      case "GET_DISCUSSIONS_BY_COMMUNITY":
        urlBuilder = new GetDiscussionsByCommunityURLBuilder();
        break;
      default:
        throw new Error("Invalid type");
    }

    this.URL = urlBuilder.buildUrl(this.options);
  }

  getURL() {
    return this.URL;
  }
}
