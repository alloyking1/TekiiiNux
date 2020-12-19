<template>
  <div>
    <header
      class="cs-header navbar navbar-expand-lg navbar-light bg-light navbar-box-shadow navbar-sticky"
      data-scroll-header
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-light container">
        <NuxtLink to="/" class="navbar-brand">
          <!-- <img
            class="d-none d-lg-block"
            width="53"
            src="../assets/img/logoTekiii.png"
            :alt="this.$SiteName"
          /> -->
          Tekiii
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NuxtLink to="/blog" class="nav-item nav-link">Blog</NuxtLink>
            <NuxtLink to="/podcast" class="nav-item nav-link">Podcast</NuxtLink>
            <a class="nav-item nav-link" href="#" @click="openForm()">Radio</a>
            <NuxtLink to="/about" class="nav-item nav-link">About</NuxtLink>
            <NuxtLink to="/contact" class="nav-item nav-link">Contact</NuxtLink>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>