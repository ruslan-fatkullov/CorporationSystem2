<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-dark  bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{'CorporationSystem' | localize}}</a>
        <div class="navbar-collapse" id="navbarNav">
        <!-- <div class="collapse navbar-collapse" id="navbarNav">  -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/graph" exact
                >{{"Graph" | localize}}</router-link
              >
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/reaction_test" exact
                >{{"Test"|localize}}</router-link
              >
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" exact
                >{{"Profile"|localize}}</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" exact
                >{{"Logout"|localize}} ({{ this.$store.state.users.name }})</router-link
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
  padding: 5px;
}
nav.navbar {
  /* padding: 0 0; */
}
.navbar-brand {
  font-size: 1.6rems;
}
.navbar-collapse{
  float: right;
}

a.router-link-active,
li.router-link-active > a {
  background-color: #6707e4;
  border-radius: 20px;
}
</style>