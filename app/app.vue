<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ data }}
  </div>
</template>
<script setup>
  const { fetchPosts } = useBlog()

  const { data, pending, refresh } = await useAsyncData(
      'posts',
      () => fetchPosts(),
  )

</script>