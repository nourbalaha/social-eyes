export const mock_data = {
    users: {
        // User 1
        "nourbalaha": {
            id: "1",
            userRef: "nourbalaha",
            email: "nourbalaha0@gmail.com",
            description: "Hello, this is Nour. A React developer in Japan",
            openProfile: true,
            created_at: 1583856395871,
            followers: [],
            followeing: [],
            likes: ["11","12"],
            posts: {
                "11": {
                    postId: "11",
                    author: "nourbalaha",
                    message: "hello this is my first post",
                    likes: ["1","2"],
                    createdAt: 1583856688324
                },
                "12": {
                    postId: "12",
                    author: "nourbalaha",
                    message: "hello this is my second post",
                    likes: ["1"],
                    createdAt: 1583856772650
                },
                "13": {
                    postId: "13",
                    author: "nourbalaha",
                    message: "hello this is my third post",
                    likes: ["2"],
                    createdAt: 1583857137924
                },
            },
        },
        // User 2
        "mohdbalaha": {
            id: "2",
            userRef: "mohdbalaha",
            email: "mohdbalaha@yahoo.co.jp",
            description: "Hello, this is Mohamad. A React developer in Japan",
            openProfile: true,
            created_at: 1583857260092,
            followers: [],
            followeing: [],
            likes: ["11","13","15"],
            posts: {
                "14": {
                    postId: "14",
                    author: "mohdbalaha",
                    message: "hello this is my first post",
                    likes: [],
                    createdAt: 1583857332643
                },
                "15": {
                    postId: "15",
                    author: "mohdbalaha",
                    message: "hello this is my second post",
                    likes: ["2"],
                    createdAt: 1583857342628
                },
            },
        },

    }
}