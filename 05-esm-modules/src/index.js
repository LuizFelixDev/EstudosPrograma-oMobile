import {connectDatabase, databaseType} from  "./utils/database.js"
import * as api from "./utils/api.js";


api.getDataFromApi();
connectDatabase("MySQL");