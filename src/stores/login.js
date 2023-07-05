import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useLoginStore = defineStore("login", () => {
  const isLogin = ref(false);

  const getAuth = async (email, password) => {
    //let url = `https://t-inpark.insynerger.com/auth/oauth/token?grant_type=password&username=${email}&password=${password}`
    let url =
      "https://t-inpark.insynerger.com/auth/oauth/token?grant_type=password&username=inparkdev&password=fbc5ee66781c07421176d9673f1d832d";

    const headers = {
      Authorization:
        "basic ZGQ3NjQ4YTYtMjVlNS00YWYyLWE1MDctZjI0MTcxMGM3Y2E2OmZmZGRmYzQ3LTRmNWItNDMwOS1iNzI3LWVhYzJjODg1MjFhMw",
    };
    const res = await axios.post(url, {}, { headers });

    const getInfo = await axios({
      method: "GET",
      url: "https://t-inpark.insynerger.com/api/incommon/v2/users/me/",
      responseType: "json",
      headers: {
        Authorization: `Bearer ${res.data.access_token}`,
      },
    })
      .then(function (response) {
        console.log("getInfo!!", response);
        isLogin.value = true
      })
      .catch(function (error) {
        console.log("錯誤", error);
      });
  };
  
  return { isLogin, getAuth };
});
