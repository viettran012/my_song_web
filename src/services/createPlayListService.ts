import { get, post } from "../utils/request";
import storage from "../utils/storage";
import API from "./API";

async function createPlayListService(body: object) {
  const API_ = API.CREATE_PLAYLIST;

  const userInfo = await storage.getItem("userInfo");
  const userId = userInfo?.user?.uid;

  return post(API_, { ...body, userId }).then((data) => {
    return data;
  });
}

async function updatePlayListService(body: object) {
  const API_ = API.UPDATE_PLAYLIST;

  const userInfo = await storage.getItem("userInfo");
  const userId = userInfo?.user?.uid;

  return post(API_, { ...body, userId }).then((data) => {
    return data;
  });
}

export default createPlayListService;

export { updatePlayListService };
