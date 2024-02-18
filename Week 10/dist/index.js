"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const client = new Client({
//     connectionString: "postgresql://sohailgidwani16:pOtrKxIQ2g5P@ep-aged-pond-51681089.us-east-2.aws.neon.tech/0-100FullStack?sslmode=require"
// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }
// Define a TypeScript interface for User
// interface User {
//     username: string;
//     email: string;
//     password: string;
//   }
//   // The insertUser function with TypeScript annotations
//   async function insertUser({ username, email, password }: User): Promise<void> {
//     try {
//       await client.connect();
//       const queryText = `
//         INSERT INTO users (username, email, password)
//         VALUES ($1, $2, $3)
//         RETURNING *;
//       `;
//       const values = [username, email, password];
//       const result = await client.query(queryText, values);
//       console.log('User inserted:', result.rows[0]);
//     } catch (error) {
//       console.error('Error inserting user:', error);
//     } finally {
//       await client.end();
//     }
//   }
//   // Example usage:
//   // Be sure to replace the placeholder values with actual data
//   insertUser({ username: 'Sohail Gidwani', email: 'sohail@example.com', password: 'NewPass' });
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://sohailgidwani16:pOtrKxIQ2g5P@ep-aged-pond-51681089.us-east-2.aws.neon.tech/0-100FullStack?sslmode=require"
        });
        try {
            yield client.connect(); // Ensure client connection is established
            const query = 'SELECT * FROM users WHERE email = $1';
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log('User found:', result.rows[0]); // Output user data
                return result.rows[0]; // Return the user data
            }
            else {
                console.log('No user found with the given email.');
                return null; // Return null if no user was found
            }
        }
        catch (err) {
            console.error('Error during fetching user:', err);
            throw err; // Rethrow or handle error appropriately
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// Example usage
getUser('sohail@example.com').catch(console.error);
