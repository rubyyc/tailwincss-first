<template>
  <div class="bg-gray-100 sm:bg-yellow-300 md:bg-green-500 xl:bg-purple-600 2xl:bg-pink-500">
    <div class="grid sm:grid-cols-1 lg:grid-cols-2 bg-green-300 2xl:grid-cols-5">
      <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div class="xl:max-w-xl">
          <img class="h-10" src="/img/logo.svg" alt />
          <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt />
          <h1 class="mt-6 text-2xl font-blod text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            You can work from anywhere.
            <br class="hidden lg:inline" />
            <span class="text-indigo-500">Take advantage of it</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
            nice weather even when you're not on vacation.
          </p>
          <div class="mt-4 space-x-8 sm:mt-6">
            <a class="btn btn-primary" href="#">Book your escape</a>
            <a class="btn btn-secondary" href="#">Learn More</a>
          </div>
        </div>
      </div>

      <div class="px-8 py-12 space-y-6" v-if="false">
        <img class="h-10" src="/img/logo.svg" alt />
        <img class="rounded-lg shadow-xl" src="/img/beach-work.jpg" alt />
        <h1 class="text-2xl font-blod text-gray-900">
          You can work from anywhere.
          <span class="text-indigo-500">Take advantage of it</span>
        </h1>
        <p class>
          Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
          nice weather even when you're not on vacation.
        </p>
      </div>
      <div class="hidden relative lg:block 2xl:col-span-3">
        <img class="absolute inset-0 w-full h-full object-cover object-left" src="/img/beach-work.jpg" alt />
      </div>
    </div>
  </div>
  <div class="bg-gray-100 max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
    <h2 class="text-xl text-gray-900">Popular destination</h2>
    <p class="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
    <div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3" >
      <template v-for="item in citys" :key="item.city">
        <Card :item="item"></Card>
      </template>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import Card from '@/components/Card'
export default {
  name: 'HomeOld',
  components: {
    Card
  },
  setup () {
    const data = reactive({
      citys: [
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/img/toronto.jpg',
          imageAlt: 'Toronto skyline'
        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: '/img/malibu.jpg',
          imageAlt: 'Cliff in Malibu'
        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: '/img/chicago.jpg',
          imageAlt: 'Chicago skyline'
        },
        {
          city: 'Seattle',
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: '/img/seattle.jpg',
          imageAlt: 'Seattle skyline'
        },
        {
          city: 'Colorado',
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: '/img/colorado.jpg',
          imageAlt: 'Lake in Colorado'
        },
        {
          city: 'Miami',
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: '/img/miami.jpg',
          imageAlt: 'Beach in Miami'
        }
      ]
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>
