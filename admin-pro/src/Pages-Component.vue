<template>
  <div id="app">
    <div id="main-wrapper">
      <SidebarComponent></SidebarComponent>
      <HeaderComponent></HeaderComponent>
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
  </div>
  
</template>

<script>

import HeaderComponent from './components/Shared/Header-Component.vue'
import BreadcrumbsComponent from './components/Shared/Breadcrumbs-Component.vue'
import SidebarComponent from './components/Shared/Sidebar-Component.vue'

export default {
  name: 'App',
  components: {
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  }
}
</script>

<style>
</style>