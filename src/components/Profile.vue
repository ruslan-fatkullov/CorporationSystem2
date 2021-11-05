<template>
    <div id="profile">
        <h3>Имя: {{user.firstname}}</h3>
        <h3>Логин: {{user.login}}</h3>
        <h3>Паспортные данные: {{user.pasportData}}</h3>
        <h3>Почта: {{user.email}}</h3>
    </div>
</template>

<script>
export default {
    name: "profile",
    props: ["user"],
}
</script>

<style scoped>

</style>