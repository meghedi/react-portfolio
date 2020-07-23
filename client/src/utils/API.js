import axios from "axios";

export default {
  sendEmail: function(data){
   return axios.post('api/email', data);
  }
};