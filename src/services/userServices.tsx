import { get, post } from "../utils/request";
import storage from "../utils/storage";
import API from "./API";

async function likeSong(body: object) {
  const API_ = API.LIKE_SONG;

  const userInfo = await storage.getItem("userInfo");
  const userId = userInfo?.user?.uid;

  return post(API_, { ...body, userId }).then((data) => {
    return data;
  });
}

async function addToPlaylist(body: object) {
  const API_ = API.ADD_TO_PLAYLIST;

  const userInfo = await storage.getItem("userInfo");
  const userId = userInfo?.user?.uid;

  return post(API_, { ...body, userId }).then((data) => {
    return data;
  });
}

async function removeToPlaylist(body: object) {
  const API_ = API.REMOVE_TO_PLAYLIST;

  const userInfo = await storage.getItem("userInfo");
  const userId = userInfo?.user?.uid;

  return post(API_, { ...body, userId }).then((data) => {
    return data;
  });
}

async function initData(body: object) {
  const userInfo = await storage.getItem("userInfo");
  const userId = userInfo?.user?.uid;
  const API_ = API.INIT_DATA + `?userId=${userId}`;

  const data = await get(API_);
  return data;
}

export { likeSong, initData, addToPlaylist, removeToPlaylist };
