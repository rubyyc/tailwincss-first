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
          <div class="mt-4 sm:mt-6">
            <a class="bg-indigo-500 hover:bg-indigo-400 hover:text-8xl sm:hover:bg-yellow-700 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-indigo-400 focus:ring-opacity-50 active:bg-pink-600 transform transition text-white px-4 py-4 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base" href="#/about">Book your escape</a>
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
</template>
<script>

export default {
  name: 'About',
  components: {
  }
}
</script>
