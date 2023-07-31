import * as httpRequest from '~/utils/httpRequest';

export const getUserFollowing = async ({ page }) => {
    try {
        const accessToken =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY5MDc3Mzk1NCwiZXhwIjoxNjkzMzY1OTU0LCJuYmYiOjE2OTA3NzM5NTQsImp0aSI6Ik1DcXVZcnFJVDlndlpvUTEiLCJzdWIiOjU5OTEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ODllhCEmnmBM-mCBefRXitetK_NtXdkI8SQoJVqXURQ';
        const res = await httpRequest.get(`me/followings`, {
            params: {
                page,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
