import usersReducer from "./users/users.reducer"
import authReducer from "./auth/auth.reducer"
import postsReducer from "./posts/posts.reducer"

import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
    posts: postsReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer;