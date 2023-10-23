<script lang="ts">
  import { page } from "$app/stores"
  import { Button, Modal } from 'flowbite-svelte';
  
  import "../app.css"

  // components for this layout
  import {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  } from "$lib/components"
    

  
</script>

<div>
  <!-- <Sidebar /> -->
  
  <AdminNavbar />
  <HeaderStats />
  <div
    class="relative md:ml-64 flex flex-col bg-slate-100 h-screen justify-between"
  >
    <!-- <AdminNavbar />
    <HeaderStats /> -->

    <div class="px-4 md:px-10 mb-auto mx-auto w-full -m-24 z-30">
      
      <slot />
      
      
    </div>
    <FooterAdmin />
  </div>
</div>


<style>
</style>
