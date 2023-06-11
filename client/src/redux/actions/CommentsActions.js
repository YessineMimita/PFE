import actionsFunction from "./generated/CommentsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import commentsApi from "../../api/commentsApi";
 
 actionsFunction.loadcommentsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return commentsApi
     .getcommentsList()
     .then(list => {
       dispatch(actionsFunction.loadcommentsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
