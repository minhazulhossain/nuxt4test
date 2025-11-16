export const useBlogAPI = () => {
    const fetchPosts = async (category?: string, page: number = 1, search?: string) => {
        const params = {
            _page: page,
            _limit: 9
        }

        return await $fetch('/api/blog', { query: params })
    }

    return {
        fetchPosts,
    }
}