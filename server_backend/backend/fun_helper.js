// /**
//  * Summary. Contains of functions used as a middleware
//  *
//  * Description. This is the set of methods for usage of middleware
//  *  operations.  
//  *
//  * @author Sashi
//  * @since  21/10/2021
//  */

// const mongo = require('mongodb');
// // internal dependencies
// const index_main = require('../index');
// const db_config = require('./dbconfig')

// console.log(client);

// //  used to create the single document
// async function createDocument(conn, newDocument) {
//     const result = await conn.db("crud").collection("users").insertOne(newDocument);
//     console.log(`single Document created with the following id: ${result.insertedId}`);
// }

// // used to create the Multiple documents 
// async function createMultipleDocuments(client, newDocuments) {
//     const result = await client.db("crud").collection("users").insertMany(newDocuments);
//     console.log(`Muliple Documents created with the following id: ${result.insertedCount}`);
//     console.log(result.insertedIds);
// }

// // used to get single document
// async function findOneDocumentByName(client, userName) {
//     const result = await client.db("crud").collection("users").findOne({ name: userName });
//     if (result) {
//         console.log(`Found the document in the collection: '${result.userName}'`);
//         console.log(result);
//     } else {
//         console.log(`No Document Found in the collections: '${result.userName}'`);
//     }
// }



// // used to get Multiple documents
// async function findManyDocumentsByName(client, {
//     minimumAge = 0,
//     maxDocuments = Number.MAX_SAFE_INTEGER
// } = {}) {
//     const cursor = await client.db("crud").collection("users").findMany({
//         age: { $lte: minimumAge },
//         age: { $gte: minimumAge }
//     }).limit(maxDocuments); //.sort({last_review: -1}) if require sort

//     const results = await cursor.toArray();
// }

// // used to update the single document 
// async function updateDocument(client, userName, updatedDocument) {
//     const result = await client.db("crud").collection("users").updateOne({ name: userName }, { $set: updatedDocument });
//     console.log(` ${result.matchedCount} document(s) matched the query criteria`);
//     console.log(` ${result.modifiedCount} documents was/were updated`);
// }


// // used to update(upsert) the single document 
// async function upsertUpdateDocument(client, userName, updatedDocument) {

//     const result = await client.db("crud").collection("users").updateOne({ name: userName }, { $set: updatedDocument }, { $upsert: true });

//     console.log(` ${result.matchedCount} document(s) matched the query criteria`);
//     if (result.upsertedCount > 0) {
//         console.log(`One document was inserted with the id ${result.upsertedId}`);
//     } else {
//         console.log(` ${result.modifiedCount} documents was/were updated`);
//     }
// }



// // used to update the multiple documents 
// async function updateMultipleDocument(client) {
//     const result = await client.db("crud").collection("users").updateMany({ address: { $exists: false } }, { $set: { address: "unknown" } });
//     console.log(` ${result.matchedCount} document(s) matched the query criteria`);
//     console.log(` ${result.modifiedCount} documents was/were updated`);
// }

// // used to delete the single document 
// async function deleteDocument(client, userName) {
//     const result = await client.db("crud").collection("users").deleteOne({ name: userName });

//     console.log(` ${result.deletedCount} documents was/were deleted`);
// }

// // used to delete the multiple documents
// async function deleteMultipleDocument(client, userAddress) {
//     const result = await client.db("crud").collection("users").deleteMany({ address: userAddress });

//     console.log(` ${result.deletedCount} documents was/were deleted`);
// }

// // used for getting the list of databases
// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     })
// }


// module.exports = {
//     createDocument,
//     createMultipleDocuments,
//     findOneDocumentByName,
//     findManyDocumentsByName,
//     updateDocument,
//     upsertUpdateDocument,
//     updateMultipleDocument,
//     deleteDocument,
//     deleteMultipleDocument,
//     listDatabases
// }