<template>
  <div id="app">
    <div id="main-wrapper">
      <HeaderComponent></HeaderComponent>
      <SidebarComponent></SidebarComponent>
      <div class="page-wrapper">
        <div class="container-fluid">
            <BreadcrumbsComponent></BreadcrumbsComponent>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                     <router-view/>
                  </div>
                </div>
              </div>
            </div>
        </div>
          <footer class="footer">
            © 2022 Admin Pro
          </footer>
      </div>
    </div>    
    <!--
      <LoginComponent/>
      <RegisterComponent/>
    -->
  </div>
</template>

<script>
import SidebarComponent from './components/Shared/Sidebar-Component.vue'
import HeaderComponent from './components/Shared/Header-Component.vue'
import BreadcrumbsComponent from './components/Shared/Breadcrumbs-Component.vue'
//import LoginComponent from './components/Auth/Login-Component.vue'
//import RegisterComponent from './components/Auth/Register-Component.vue'

export default {
  name: 'App',
  components: {
    // LoginComponent,
    // RegisterComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  }
}
</script>

<style>
</style>
