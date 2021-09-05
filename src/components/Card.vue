<template>
  <div class="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="h-32 w-32 flex-shrink-0" :src="item.imageUrl" alt />
        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold uppercase text-brand-light">{{item.city}}</h3>
          <p class="text-gray-600">{{item.averagePrice}} / night average</p>
          <div class="mt-4">
            <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">Explore {{item.propertyCount}} properties</a>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'Card',
  props: ['item']
}
</script>
