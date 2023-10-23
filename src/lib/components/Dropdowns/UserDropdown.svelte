<script>
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core"
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-svelte';
  import { ChevronDownSolid } from 'flowbite-svelte-icons';
  import { page } from "$app/stores"
  // core components

  $: activeUrl = $page.url.pathname;

  const defaultImage = "$lib/assets/img/team-1-800x800.jpg"

  let dropdownPopoverShow = false

  let btnDropdownRef
  let popoverDropdownRef

  const toggleDropdown = (event) => {
    event.preventDefault()
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false
    } else {
      dropdownPopoverShow = true
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      })
    }
  }
  
</script>

<div>
  <Avatar id="user-drop" src="{$page.data.session?.user?.image}" class="cursor-pointer"/>
  <Dropdown triggeredBy="#user-drop">
    <DropdownHeader>
      <span class="block text-sm font-semibold">{$page.data.session?.user?.name}</span>
      {#if $page.data.session?.user?.email}
      <span class="block truncate text-sm font-extralight">{$page.data.session?.user?.email}</span>
      {/if}
      
    </DropdownHeader>
    <DropdownItem href="/admin/dashboard">Dashboard</DropdownItem>
    <DropdownItem href="/account">Account</DropdownItem>
    
    <DropdownDivider />
    <DropdownItem href="/auth/signout">Sign out</DropdownItem>
  </Dropdown>
  
</div>
