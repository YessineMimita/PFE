import actionsFunction from "./generated/PostsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import postsApi from "../../api/postsApi";
 
 actionsFunction.loadpostsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return postsApi
     .getpostsList()
     .then(list => {
       dispatch(actionsFunction.loadpostsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
