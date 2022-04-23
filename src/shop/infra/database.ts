import mongodb, {MongoClient} from "mongodb"

export interface DatabaseConnectionOptions {
    MONGO_URL: string;
}

const getMongoDbClient = ({MONGO_URL} : DatabaseConnectionOptions): Promise<MongoClient> => {
    return mongodb.MongoClient.connect(process.env.MONGO_URL);
}
