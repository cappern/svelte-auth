<script lang="ts">
  import { page } from "$app/stores"

  import "../app.css"

  // components for this layout
  import { AdminNavbar, Sidebar, HeaderStats, FooterAdmin } from "$lib/components"
  
</script>

<div class="app">
  <Sidebar/>
  <div class="relative md:ml-64 bg-slate-100">
    
    <AdminNavbar />
    <HeaderStats />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <slot />
    </div>
    <FooterAdmin/>
    <slot />
  </div>
</div>

<style>
</style>
