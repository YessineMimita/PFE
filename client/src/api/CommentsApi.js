import CommentsApiGenerated from "./generated/CommentsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CommentsApi extends CommentsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Comments List
  static getCommentsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/commentss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CommentsApi;