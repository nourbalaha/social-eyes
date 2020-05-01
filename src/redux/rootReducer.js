import userReducer from "./user/user.reducer";
import usersReducer from "./users/users.reducer";
import authReducer from "./auth/auth.reducer";
import postsReducer from "./posts/posts.reducer";
import feedReducer from "./feed/feed.reducer";
import flashReducer from "./flash/flash.reducer";

import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    auth: authReducer,
    posts: postsReducer,
    feed: feedReducer,
    flash: flashReducer, 
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;