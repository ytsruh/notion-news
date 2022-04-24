// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: `secret_GJrx4MppwEYAaXjFg0XXPTQ98nGT3I6QKRaiKUuoi1Q`,
});

export default async function handler(req, res) {
  // const response = await notion.search({
  //   filter: {
  //     value: "database",
  //     property: "object",
  //   },
  // });
  const pageId = "ac9d03b1b93e491bb5190533e1f6b441";
  //const response = await notion.pages.retrieve({ page_id: pageId });
  // const sad = await notion.blocks.retrieve({
  //   block_id: pageId,
  // });
  // const response = await notion.blocks.children.list({
  //   block_id: pageId,
  //   page_size: 50,
  // });
  const db = await notion.databases.query({
    database_id: "9470bd920b4a4f5f8a1897df28fc83f2",
  });
  res.status(200).json({ apiVersion: "0.1", db });
}
