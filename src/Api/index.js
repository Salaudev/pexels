import axios from "axios";

// All requests made with the client will be authenticated

const instanceAxios = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    common: {
      Authorization: "563492ad6f91700001000001556f1d59ccd44034b0110a9d8a440604",
    },
  },
});

export const getDatas = async (index) => {
  try {
    const res = await instanceAxios.get(`curated?page=${index}&per_page=40
`);

    console.log("====================================");
    console.log(res.data);
    console.log("====================================");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const searchImg = async (page, value) => {
  try {
    const res = await instanceAxios.get(
      `search?query=${value}&page=${page}&per_page=20`
    );

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
