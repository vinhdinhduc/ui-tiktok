import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
            headers: { Authorization: `Bearer YOUR_ACCESS_TOKEN` },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
