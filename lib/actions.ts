import { Client } from "@notionhq/client";
import { PageObjectResponse, PartialPageObjectResponse, PartialDatabaseObjectResponse, DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notionSeacret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notion = new Client({
    auth: notionSeacret,
});

type Data = { posts: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[]; nextCursor: string | null };

export async function fetchBlogData(pageSize?: string, startCursor?: string, containsTitle?: string, containsTag?: string): Promise<Data> {
    if (!notionSeacret || !notionDatabaseId) {
        throw new Error("envにNOTION_TOKENまたはNOTION_DATABASE_IDが設定されていません。");
    }

    const query = await notion.databases.query({
        database_id: notionDatabaseId,
        page_size: pageSize ? Number(pageSize) : undefined,
        start_cursor: startCursor,
        filter: {
            and: [
                { property: "title", title: { contains: containsTitle ?? "" } },
                { property: "tag", multi_select: { contains: containsTag ?? "" } },
                { property: "publish", checkbox: { equals: true } },
            ],
        },
        sorts: [{ property: "id", direction: "descending" }],
    });

    const posts = query.results;

    return { posts, nextCursor: query.next_cursor };
}
