<script>
  // core components
  import { onMount } from 'svelte';
  import { TableDropdown } from "$lib/components"
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';

  const bootstrap = "/img/bootstrap.jpg"

  const angular = "/img/angular.jpg"
  const sketch = "/img/sketch.jpg"
  const react = "/img/react.jpg"
  const vue = "/img/react.jpg"

  const team1 = "/img/team-1-800x800.jpg"
  const team2 = "/img/team-2-800x800.jpg"
  const team3 = "/img/team-3-800x800.jpg"
  const team4 = "/img/team-4-470x470.png"

  // can be one of light or dark
  export let color = "light"

  /**
   * @type {any}
   */

  export let users
  /**
     * @type {any[]}
     */
  let items = [];
  let searchTerm = '';
  $: filteredItems = items.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);


  
</script>

<div
  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
>
<div class="rounded-t mb-0 px-4 py-3 border-0">
  <div class="flex items-center justify-around ">
    <div class=" sm:w-auto px-4 flex-grow">
      <h3 class="font-semibold text-lg text-slate-700">Guest Users</h3>
    </div>
    <div class="sm:w-auto px-4 flex-grow">
      <input type="search" placeholder="Filter" class="rounded ml-auto">
    </div>
  </div>
</div>

<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell >ID</TableHeadCell>

  </TableHead>
  <TableBody>
    {#each filteredItems as guest}
      <TableBodyRow>
        <TableBodyCell>{guest.id}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>
  <div class="block w-full overflow-x-auto">
    <!-- Users table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Name
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Phone
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Status
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Contact
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Expire
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Action
          </th>
          <th
            class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-slate-50 text-slate-500 border-slate-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          />
        </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
            >
              <span
                class="ml-3 font-bold {color === 'light'
                  ? 'btext-slate-600'
                  : 'text-whit'}"
              >
                {user.name}
              </span>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {user.mobile}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <i class="fas fa-circle text-orange-500 mr-2" />
              {user.status.toUpperCase()}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="group flex relative">
                <img
                  src={user.contact.image}
                  alt={user.contact.name}
                  class="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                />
                <span
                  class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
                >
                  {user.contact.name}
                </span>
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              <div class="flex items-center">
                <span class="ml-3 font-bold"
                  >{new Date(user.expire).toLocaleDateString("nb-NO")}</span
                >
                <div class="relative w-full" />
              </div>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <TableDropdown />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
