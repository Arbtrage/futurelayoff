import { NextRequest, NextResponse } from "next/server";

async function getPosts() {
    return [
        {
            id: 1,
            title: "Hello World",
            content: "This is my first post",
        },
    ];
}


async function addPost() {
    return {
        id: 1,
        title: "Hello World",
        content: "This is my first post",
    };
}


export const POST= async (request: NextRequest) => {
    const post = await addPost();
    return NextResponse.json(post);
}

export const GET = async (request: NextRequest) => {
    const posts = await getPosts();
    return NextResponse.json(posts);
}