<script>
    // core components
    import { CardTable } from "$lib/components";
    
    /** @type {import('./$types').PageData} */
	export let data
  </script>
  
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <CardTable users={data.guests} />
    </div>
  </div>
  