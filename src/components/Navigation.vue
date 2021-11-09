<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Corporation system</a>
        <div class="navbar-collapse" id="navbarNav">
        <!-- <div class="collapse navbar-collapse" id="navbarNav">  -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/graph" exact
                >Graph</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" exact
                >Profile</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact
                >Logout ({{ this.$store.state.users.name }})</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style>
a.nav-link {
  padding: 10px;
}
nav.navbar {
  padding: 0 0;
}
.navbar-brand {
  font-size: 1.6rems;
}

a.router-link-active,
li.router-link-active > a {
  background-color: #a8b4af;
}
</style>