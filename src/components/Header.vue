<!-- @format -->

<template>
  <nav class="w-full">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4 px-2">
                <router-link to="/" class="text-black text-xs font-semibold border-b-2 border-red-600">deni.design</router-link>
            </a>
          </div>
        </div>
        <!-- Primary Navbar items -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="" class="py-4 px-6 text-black text-xs font-semibold"
            >Other Projects</a
          >
          <a href="" class="py-4 px-6 text-black text-xs font-semibold"
            >Speaking</a
          >
          <a href="" class="py-4 px-6 text-black text-xs font-semibold"
            >Resume</a
          >
          <a href="" class="py-4 px-6 text-black text-xs font-semibold"
            >
            Contact
            </a
          >
          <a href="" class="py-4 text-black text-xs font-semibold">
            <unicon name="moon" fill="black" class="mr-2"></unicon>
          </a>
          <a href="" class="py-4 text-black text-xs font-semibold">
            <unicon name="sun" fill="black"></unicon>
          </a>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-black"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
      <ul class="">
        <li class="active">
          <a href="#" class="py-4 px-4 text-black">Other Projects</a>
        </li>
        <li><a href="" class="py-4 px-4 text-black">Speaking</a></li>
        <li><a href="" class="py-4 px-4 text-black">Resume</a></li>
        <li><a href="" class="py-4 px-4 text-black">Contact</a></li>
        <li><a href="" class="py-4 text-black text-xs font-semibold">
            <unicon name="moon" fill="black" class="mr-2"></unicon>
          </a></li>
          <li><a href="" class="py-4 text-black text-xs font-semibold">
            <unicon name="sun" fill="black"></unicon>
        </a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  },
};
</script>
