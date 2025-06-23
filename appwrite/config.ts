// appwrite/config.ts
import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Or your Appwrite instance URL
  .setProject('6859022e00034c662703'); // Your Project ID

const databases = new Databases(client);

export { client, databases, ID };
