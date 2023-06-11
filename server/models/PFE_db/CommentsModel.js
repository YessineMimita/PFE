import CommentsModelGenerated from "./generated/CommentsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CommentsModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CommentsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CommentsModelGenerated,
  ...customModel
};
